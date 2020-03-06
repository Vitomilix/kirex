#stop kire
echo stopping services
echo stopping user
kill -9 $(lsof -t -i:3000)
echo stopping admin
kill -9 $(lsof -t -i:3001)
echo all services stopped