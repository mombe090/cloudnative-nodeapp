all: build_img

.PHONY: all

build_img:
	docker build -t node_app .

push_img:
	docker tag node_app mombe090/cloud_native_node_app:0.0.1
	docker push mombe090/cloud_native_node_app:0.0.1
