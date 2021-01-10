sudo mkdir -p /opt/lisacp /var/log/lisacp
sudo groupadd -r lisacp
sudo useradd -r -s /bin/false -g lisacp lisacp
sudo chown -R lisacp:lisacp /opt/lisacp
sudo touch /var/log/lisacp/lisacp.log
sudo chown lisacp:lisacp /var/log/lisacp/lisacp.log
sudo touch /etc/default/lisacp
sudo chmod 640 /etc/default/lisacp
