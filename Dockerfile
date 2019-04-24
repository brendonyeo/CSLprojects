FROM alpine
MAINTAINER chriseth <chris@ethereum.org>
ADD  solidity /solidity                                                                                   
RUN \
  apk --no-cache --update add build-base cmake boost-dev boost-static git  z3>0.4.6                                              && \
  cd /solidity && cmake -DCMAKE_BUILD_TYPE=Release -DTESTS=0 -DSTATIC_LINKING=1                             && \
  cd /solidity && make solc && install -s  solc/solc /usr/bin                                               && \
  cd / && rm -rf solidity                                                                                   
