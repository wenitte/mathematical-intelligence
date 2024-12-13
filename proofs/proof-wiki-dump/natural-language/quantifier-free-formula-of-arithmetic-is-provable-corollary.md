# 

Source: https://proofwiki.org/wiki/Quantifier-Free_Formula_of_Arithmetic_is_Provable/Corollary

Theorem
Let $\phi$ be a sentence in the language of arithmetic.
Suppose $\phi$ contains no quantifiers.
Then exactly one of:

$\phi$
$\neg \phi$
is a theorem of minimal arithmetic.

Proof
By Law of Excluded Middle, either $\N \models \phi$, or $\N \models \neg \phi$.
By Quantifier-Free Formula of Arithmetic is Provable, whichever one holds is a theorem of minimal arithmetic.
$\Box$

Now, suppose that $\N \models \phi$.
Then, $\N \not\models \phi$ by definition of value of formula.
Thus, by the definition of sound proof system, $\neg \phi$ is not a theorem.
Therefore, $\phi$ and $\neg \phi$ cannot both be theorems.
$\blacksquare$





