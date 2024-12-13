# 

Source: https://proofwiki.org/wiki/Russell%27s_Paradox/Corollary/Proof_2

Theorem
$\not \exists x: \forall y: \paren {\map \RR {x, y} \iff \neg \map \RR {y, y} }$


Proof
Aiming for a contradiction, suppose:

$\exists x: \forall y: \paren {\map \RR {x, y} \iff \neg \map \RR {y, y} }$
By Existential Instantiation:

$\forall y: \paren {\map \RR {x, y} \iff \neg \map \RR {y, y} }$
By Universal Instantiation:

$\map \RR {x, x} \iff \neg \map \RR {x, x} $
But this contradicts Biconditional of Proposition and its Negation.
We thus conclude:

$\not \exists x: \forall y: \paren {\map \RR {x, y} \iff \neg \map \RR {y, y} }$
$\blacksquare$





