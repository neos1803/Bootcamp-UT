class Employee:
    data = []
    id = 1
    
    @staticmethod
    def add(d):
        n = {}
        # Employee.data.append({ "id" : Employee.id, dicts})
        for k,v in d.items():
            n["id"] = Employee.id
            n[k] = v   
        Employee.id += 1
        Employee.data.append(n)
    
    @staticmethod
    def read():
        print(Employee.data)

    @staticmethod
    def delete(x):
        for i in range(len(Employee.data)):
            if Employee.data[i]["id"] == x:
                del Employee.data[i]
                break
        print(Employee.data)
    
    @staticmethod
    def update(x, d):
        for i in range(len(Employee.data)):
            if Employee.data[i]["id"] == x:
                for k,v in d.items():
                    Employee.data[i][k] = v
                    break
        print(Employee.data)

employee = Employee()
employee.add({"fullname":"ratna putri", "address":"jakarta", "salary":5000000, "phone":"099903"})
employee.add({"fullname":"ratna putri", "address":"jakarta", "salary":5000000, "phone":"099903"})
employee.delete(2)
employee.update(1, {"fullname":"raisa andriana", "address":"bekasi", "salary":1000000, "phone":"9939999"})