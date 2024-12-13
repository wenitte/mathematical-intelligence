# 

Source: https://proofwiki.org/wiki/Russell%27s_Paradox/Corollary/Proof_1

Theorem
$\not \exists x: \forall y: \paren {\map \RR {x, y} \iff \neg \map \RR {y, y} }$


Proof
Aiming for a contradiction, suppose there does exist such an $x$.
Let $\RR$ be such that $\map \RR {x, x}$.
Then $\neg \map \RR {x, x}$.
Hence it cannot be the case that $\map \RR {x, x}$.
Now suppose that $\neg \map \RR {x, x}$.
Then by definition of $x$ it follows that $\map \RR {x, x}$.
In both cases a contradiction results.
Hence there can be no such $x$.
$\blacksquare$





