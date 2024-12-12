# 

Source: https://proofwiki.org/wiki/Contradiction_is_Negation_of_Tautology/Proof_3

Theorem
A contradiction implies and is implied by the negation of a tautology:

$\bot \dashv \vdash \neg \top$
That is, a falsehood can not be true, and a non-truth is a falsehood.


Proof
Let $p$ be a propositional formula.
Let $v$ be any arbitrary boolean interpretation of $p$.

Then $\map v p = F \iff \map v {\neg p} = T$ by the definition of the logical not.
Since $v$ is arbitrary, $p$ is false in all interpretations if and only if $\neg p$ is true in all interpretations.

Hence:

$\bot \dashv \vdash \neg \top$
$\blacksquare$


Law of the Excluded Middle
This theorem depends on the Law of the Excluded Middle.
This is one of the logical axioms that was determined by Aristotle, and forms part of the backbone of classical (Aristotelian) logic.
However, the intuitionist school rejects the Law of the Excluded Middle as a valid logical axiom.
This in turn invalidates this theorem from an intuitionistic perspective.

That is, the proposition:

If it's not true, it must be false
is valid only in the context where there are only two truth values.





