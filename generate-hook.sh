#!/bin/bash
# variables
GIT_DIR=$(dirname $0)/.git

if [[ -d $GIT_DIR ]]; then
    echo "Directory exists!"
    mkdir $GIT_DIR/hooks
    cat <<'EOS' > $GIT_DIR/hooks/pre-push
#!/bin/bash

# 設定ファイルから#以外をよみこむ
export $(cat $(dirname $0)/.git-push-hook-config | grep -v ^# | xargs);

while read local_ref local_sha1 remote_ref remote_sha1
do
  if [[ "${remote_ref##refs/heads/}" = "master" ]]; then
    echo "Warning: push to remote master, continue? [y/N]"

    exec < /dev/tty
    read ANSWER

    case $ANSWER in "Y" | "y" | "yes" | "Yes" | "YES" ) echo "OK. push start."; ssh -i $SSH_IDENTITY_FILE_PATH $SERVER_USER_NAME@$SERVER_HOST_NAME; cd $GIT_PULL_DIR_PATH; git clone $REPOSITORY_SSH_URL;
    * ) echo "push failed.";exit 1;;
    esac
    exit 0
  fi
done
EOS
    chmod +x $GIT_DIR/hooks/pre-push
    exit 0
else
  echo "Directory not exists..."
    exit 1
fi
