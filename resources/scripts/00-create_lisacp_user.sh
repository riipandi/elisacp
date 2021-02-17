sudo mkdir -p /opt/elisacp /var/log/elisacp
sudo groupadd -r elisacp
sudo useradd -r -s /bin/false -g elisacp elisacp
sudo chown -R elisacp:elisacp /opt/elisacp
sudo touch /var/log/elisacp/elisacp.log
sudo chown elisacp:elisacp /var/log/elisacp/elisacp.log
sudo touch /etc/default/elisacp
sudo chmod 640 /etc/default/elisacp

sudo chown elisacp:elisacp /usr/bin/elisacp
sudo chmod 0777 /usr/bin/elisacp
