# Network Design

## Topology Overview
This network simulates an enterprise LAN using Cisco Packet Tracer.
It mirrors the Docker Compose network segmentation of the application.

## Devices
| Device | Model | Role |
|--------|-------|------|
| R1 | Cisco 2911 | Inter-VLAN Router |
| SW1 | Cisco 2960 | Layer 2 Switch |
| PC-Client | End Device | Simulates user/browser |
| PC-AppServer | End Device | Simulates Node.js container host |
| PC-DBServer | End Device | Simulates MongoDB container host |

## VLAN Design
| VLAN | Name | Subnet | Purpose |
|------|------|--------|---------|
| 1 | Default | 192.168.1.0/24 | Client network |
| 10 | APP-NETWORK | 192.168.10.0/24 | Application server |
| 20 | DB-NETWORK | 192.168.20.0/24 | Database server |

## Routing
Inter-VLAN routing is handled via Router-on-a-Stick on R1
using subinterfaces on GigabitEthernet0/0.

## Docker Mapping
| Docker Network | Maps To | Subnet |
|----------------|---------|--------|
| app-network | VLAN 10 | 192.168.10.0/24 |
| db-network | VLAN 20 | 192.168.20.0/24 |

## Security Notes
- Configs have been sanitized — passwords replaced with <PASSWORD>
- Private IPs only — no public infrastructure exposed
