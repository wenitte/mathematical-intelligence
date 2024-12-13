# 

Source: https://proofwiki.org/wiki/Product_of_Generating_Elements_of_Quaternion_Group



Theorem
Let $Q = \Dic 2$ be the quaternion group:

$\Dic 2 = \gen {a, b: a^4 = e, b^2 = a^2, a b a = b}$
Then for all $k \in \Z_{\ge 0}$:

$b a^k = a^{-k} b$


Proof
The proof proceeds by induction.
For all $k \in \Z_{\ge 0}$, let $\map P k$ be the proposition:

$b a^k = a^{-k} b$

$\map P 0$ is the case:














\(\ds b a^0\)

\(=\)







\(\ds b e\)




















\(\ds \)

\(=\)







\(\ds e b\)




















\(\ds \)

\(=\)







\(\ds a^{-0} b\)










Thus $\map P 0$ is seen to hold.


Basis for the Induction
We have:














\(\ds a b a\)

\(=\)







\(\ds b\)














\(\ds \leadsto \ \ \)





\(\ds b a^1\)

\(=\)







\(\ds a^{-1} b\)










Thus $\map P 1$ is seen to hold.

This is the basis for the induction.


Induction Hypothesis
Now it needs to be shown that, if $\map P r$ is true, where $r \ge 1$, then it logically follows that $\map P {r + 1}$ is true.

So this is the induction hypothesis:

$b a^r = a^{-r} b$

from which it is to be shown that:

$b a^{r + 1} = a^{-r - 1} b$


Induction Step
This is the induction step:














\(\ds b a^{r + 1}\)

\(=\)







\(\ds b a^r a\)




















\(\ds \)

\(=\)







\(\ds a^{-r} b a\)





Product of Generating Elements of Quaternion Group














\(\ds \)

\(=\)







\(\ds a^{-r} \alpha^{-1} b\)





Basis for the Induction














\(\ds \)

\(=\)







\(\ds a^{-r - 1} b\)









So $\map P r \implies \map P {r + 1}$ and the result follows by the Principle of Mathematical Induction.

Therefore:

$\forall k \in \Z_{\ge 0}: b a^k = a^{-k} b$
$\blacksquare$





