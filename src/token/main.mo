import Principal from "mo:base/Principal"


actor Token {

    var owner : Principal = Principal.fromText(process.env.PRINCIPAL);
    vartotalSupply : Nat = 1000000000;
    var symbol : Text = "SEGE"
}