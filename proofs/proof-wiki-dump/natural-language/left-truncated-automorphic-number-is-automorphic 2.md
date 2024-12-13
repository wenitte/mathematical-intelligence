# 

Source: https://proofwiki.org/wiki/Left-Truncated_Automorphic_Number_is_Automorphic



Theorem
Let $n$ be an automorphic number, expressed in some conventional number base.
Let any number of digits be removed from the left-hand end of $n$.

Then what remains is also an automorphic number.


Proof
Let $n$ be an automorphic number of $d$ digits, expressed in base $b$.
By Definition of Automorphic Number, we have:

$n^2 \equiv n \pmod {b^d}$

Let some digits be removed from the left-hand end of $n$, so that only $d'$ digits remain.
This only makes sense when $d' < d$.
Define this new number as $n'$.
Then we have:

$n \equiv n' \pmod {b^{d'} }$
Thus we have:














\(\ds n^2\)

\(\equiv\)







\(\ds n\)

\(\ds \pmod {b^{d'} }\)



Congruence by Divisor of Modulus: from $n^2 \equiv n \pmod {b^d}$ and $b^{d'} \divides b^d$














\(\ds n^2\)

\(\equiv\)







\(\ds \paren {n'}^2\)

\(\ds \pmod {b^{d'} }\)



Congruence of Powers: from $n \equiv n' \pmod {b^{d'} }$








\(\ds \leadsto \ \ \)





\(\ds \paren {n'}^2\)

\(\equiv\)







\(\ds n'\)

\(\ds \pmod {b^{d'} }\)







Hence $n'$ is an automorphic number of $d'$ digits in base $b$.
$\blacksquare$


Also see

This page has been identified as a candidate for refactoring of basic complexity.In particular: put this togetherUntil this has been finished, please leave {{Refactor}} in the code.
New contributors: Refactoring is a task which is expected to be undertaken by experienced editors only.

Because of the underlying complexity of the work needed, it is recommended that you do not embark on a refactoring task until you have become familiar with the structural nature of pages of $\mathsf{Pr} \infty \mathsf{fWiki}$.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Refactor}} from the code.
Similar proofs can give similar results for other similarly defined numbers, e.g. Trimorphic Numbers, Tri-Automorphic Numbers.


Examples
Left-Truncation of $1 \, 787 \, 109 \, 376$
We have that $1 \, 787 \, 109 \, 376$ is automorphic:

$1 \, 787 \, 109 \, 376^2 = 3 \, 193 \, 759 \, 92 \, \mathbf {1 \, 787 \, 109 \, 376}$

Hence so is $109 \, 376$:

$109 \, 376^2 = 11 \, 963 \, \mathbf {109 \, 376}$


Sources
1986: David Wells: Curious and Interesting Numbers ... (previous) ... (next): $1,787,109,376$
1997: David Wells: Curious and Interesting Numbers (2nd ed.) ... (previous) ... (next): $1,787,109,376$




