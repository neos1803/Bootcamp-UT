# Service Kubernetes

## Nodeport
- Membuat service type nodeport bisa by yaml atau cli
- Bila by yaml, buat service type nodeport dan config lain di dalamnya
- Kemudian
```sh
    kubectl apply -f <namafile.yaml>
```
- Lalu check node-ip
```sh
    kubectl get nodes -o wide
```
- Untuk check kalau pod sudah bisa berjalan, buka browser lalu ketik <node-ip>:<node-port>

## Load Balancer
- Membuat service type Load Balancer bisa by yaml atau cli
- Bila by yaml, buat service type Load Balancer dan config lain di dalamnya
- Di dalam LoadBalancerIP diisi IP dari cloud platform yang digunakan
- Kemudian
```sh
    kubectl apply -f <namafile.yaml>
```
- Lalu check external-ip
```sh
    kubectl get services
```
- Untuk check kalau pod sudah bisa berjalan, buka browser lalu ketik <external-ip>:<port>

## Ingress
- Membuat service type ingress by yaml
- Sebelumnya, harus meng-enable addons ingress. Bila dijalankan di windows, minikube harus run as administrator, kemudian
```sh
    minikube start --vm=true
```
- Lalu, enable addons
``sh
    minikube addons enable ingress
```
- Kemudian, buat configurasi di dalam file yaml. Lalu,
```sh
    kubectl apply -f <namafile.yaml>
```
- Lalu check ingress
```sh
    kubectl get ingress
```
- Untuk check kalau pod sudah bisa berjalan, buka browser lalu ketik <host>/<path>

PS:
    Harusnya sih jalan, tapi ternyata ada kesalahan di image nya, makanya gak muncul apapun.