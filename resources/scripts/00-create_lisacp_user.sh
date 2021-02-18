sudo mkdir -p /opt/elisacp /var/log/elisacp
sudo groupadd -r elisacp
sudo useradd -r -s /bin/false -g elisacp elisacp
sudo chown -R elisacp:elisacp /opt/elisacp
sudo touch /var/log/elisacp/elcp.log
sudo chown elisacp:elisacp /var/log/elisacp/elcp.log
sudo touch /etc/default/elisacp
sudo chmod 640 /etc/default/elisacp

sudo chown elisacp:elisacp /opt/elisacp/bin/elisacp
sudo chmod 0777 /opt/elisacp/bin/elisacp
