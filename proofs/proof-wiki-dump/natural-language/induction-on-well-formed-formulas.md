# 

Source: https://proofwiki.org/wiki/Induction_on_Well-Formed_Formulas

Theorem
Let $\FF$ be a formal language with a bottom-up grammar.
Let $\Phi$ be a proposition about the well-formed formulas of $\FF$.

Suppose that $\Phi$ is true for all letters of $\FF$.
Suppose further that every rule of formation preserves $\Phi$, i.e. when fed well-formed formulas satisfying $\Phi$, it yields new well-formed formulas satisfying $\Phi$.

Then all well-formed formulas of $\FF$ satisfy $\Phi$.


Proof
By definition of bottom-up grammar, the well-formed formulas of $\FF$ comprise:

letters of $\FF$;
expressions resulting from rules of formation.

Either case is dealt with by the assumptions on $\Phi$.
Hence the result, from Proof by Cases.
$\blacksquare$





