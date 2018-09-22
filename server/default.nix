with import <nixpkgs> {};

let
  py = pkgs.python3;
in
stdenv.mkDerivation rec {
  name = "env";

  buildInputs = (with py.pkgs; [
    py
    websocket_client
  ]);

  shellHook = ''
    export FISH_P1="(py) "
    export FISH_P1_COLOR="green"
    fish; exit
  '';
}
