# 

Source: https://proofwiki.org/wiki/De_Moivre%27s_Formula/Positive_Integer_Index/Proof_1



Theorem
Let $z \in \C$ be a complex number expressed in polar form:

$z = r \paren {\cos x + i \sin x}$
Then:

$\forall n \in \Z_{>0}: \paren {r \paren {\cos x + i \sin x} }^n = r^n \paren {\map \cos {n x} + i \map \sin {n x} }$


Proof
Proof by induction:
For all $n \in \Z_{> 0}$, let $\map P n$ be the proposition:

$\paren {r \paren {\cos x + i \sin x} }^n = r^n \paren {\map \cos {n x} + i \, \map \sin {n x} }$

$\map P 1$ is the case:

$\paren {r \paren {\cos x + i \sin x} }^1 = r^1 \paren {\map \cos {1 x} + i \, \map \sin {1 x} }$
which is trivially true.


Basis for the Induction
$\map P 2$ is the case:

$\paren {r \paren {\cos x + i \sin x} }^2 = r^2 \paren {\map \cos {n x} + i \, \map \sin {2 x} }$
From Product of Complex Numbers in Polar Form, we have:

$r_1 \paren {\cos x_1 + i \sin x_1 } r_2 \paren {\cos x_2 + i \sin x_2} = r_1 r_2 \paren {\map \cos {x_1 + x_2} + i \, \map \sin {x_1 + x_2} }$
Setting $r_1 = r_2 = r$ and $x_1 = x_2 = x$ gives the result.

This is our basis for the induction.


Induction Hypothesis
Now we need to show that, if $\map P k$ is true, where $k \ge 1$, then it logically follows that $\map P {k + 1}$ is true.

So this is our induction hypothesis:

$\paren {r \paren {\cos x + i \sin x} }^k = r^k \paren {\map \cos {k x} + i \, \map \sin {k x} }$

Then we need to show:

$\paren {r \paren {\cos x + i \sin x} }^{k + 1} = r^{k + 1} \paren {\map \cos {\paren {k + 1} x} + i \, \map \sin {\paren {k + 1} x} }$


Induction Step
This is our induction step:














\(\ds \paren {r \paren {\cos x + i \sin x} }^{k + 1}\)

\(=\)







\(\ds \paren {r \paren {\cos x + i \sin x} }^k \paren {r \paren {\cos x + i \sin x} }\)




















\(\ds \)

\(=\)







\(\ds r^k \paren {\map \cos {k x} + i \, \map \sin {k x} } \paren {r \paren {\cos x + i \sin x} }\)





Induction Hypothesis














\(\ds \)

\(=\)







\(\ds r^{k + 1} \paren {\map \cos {\paren {k + 1} x} + i \, \map \sin {\paren {k + 1} x} }\)





Product of Complex Numbers in Polar Form




Hence, by induction, for all $n \in \Z_{> 0}$:

$\paren {r \paren {\cos x + i \sin x} }^n = r^n \paren {\map \cos {n x} + i \, \map \sin {n x} }$
$\blacksquare$


Source of Name
This entry was named for Abraham de Moivre.


Sources
1981: Murray R. Spiegel: Theory and Problems of Complex Variables (SI ed.) ... (previous) ... (next): $1$: Complex Numbers: Solved Problems: De Moivre's Theorem: $20$




