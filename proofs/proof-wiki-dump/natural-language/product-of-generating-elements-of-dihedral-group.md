# 

Source: https://proofwiki.org/wiki/Product_of_Generating_Elements_of_Dihedral_Group



Theorem
Let $D_n$ be the dihedral group of order $2 n$.
Let $D_n$ be defined by its group presentation:

$D_n = \gen {\alpha, \beta: \alpha^n = \beta^2 = e, \beta \alpha \beta = \alpha^{−1} }$
Then for all $k \in \Z_{\ge 0}$:

$\beta \alpha^k = \alpha^{n - k} \beta$


Proof
The proof proceeds by induction.
For all $k \in \Z_{\ge 0}$, let $\map P k$ be the proposition:

$\beta \alpha^k = \alpha^{n - k} \beta$

$\map P 0$ is the case:














\(\ds \beta \alpha^0\)

\(=\)







\(\ds \beta e\)




















\(\ds \)

\(=\)







\(\ds e \beta\)




















\(\ds \)

\(=\)







\(\ds \alpha^n \beta\)




















\(\ds \)

\(=\)







\(\ds \alpha^{n - 0} \beta\)










Thus $\map P 0$ is seen to hold.


Basis for the Induction
We have:














\(\ds \beta \alpha \beta\)

\(=\)







\(\ds \alpha^{-1}\)





Group Presentation of Dihedral Group








\(\ds \leadsto \ \ \)





\(\ds \beta \alpha \beta^2\)

\(=\)







\(\ds \alpha^{-1} \beta\)














\(\ds \leadsto \ \ \)





\(\ds \beta \alpha\)

\(=\)







\(\ds \alpha^{-1} \beta\)










Thus $\map P 1$ is seen to hold.

This is the basis for the induction.


Induction Hypothesis
Now it needs to be shown that, if $\map P r$ is true, where $r \ge 1$, then it logically follows that $\map P {r + 1}$ is true.

So this is the induction hypothesis:

$\beta \alpha^r = \alpha^{n - r} \beta$

from which it is to be shown that:

$\beta \alpha^{r + 1} = \alpha^{n - r - 1} \beta$


Induction Step
This is the induction step:














\(\ds \beta \alpha^{r + 1}\)

\(=\)







\(\ds \alpha^{n - r} \beta \alpha\)




















\(\ds \)

\(=\)







\(\ds \alpha^{n - r} \alpha^{-1} \beta\)





Basis for the Induction














\(\ds \)

\(=\)







\(\ds \alpha^{n - r - 1} \beta\)









So $\map P r \implies \map P {r + 1}$ and the result follows by the Principle of Mathematical Induction.

Therefore:

$\forall k \in \Z_{\ge 0}: \beta \alpha^k = \alpha^{n - k} \beta$
$\blacksquare$





