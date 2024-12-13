# 

Source: https://proofwiki.org/wiki/Product_of_Sums_of_Four_Squares/Corollary



Theorem
Let $a_1, a_2, \ldots, a_n, b_1, b_2, \ldots, b_n, c_1, c_2, \ldots, c_n, d_1, d_2, \ldots, d_n$ be integers.
Then:

$\ds \exists w, x, y, z \in \Z: \prod_{j \mathop = 1}^n \paren {a_j^2 + b_j^2 + c_j^2 + d_j^2} = w^2 + x^2 + y^2 + z^2$

That is, the product of any number of sums of four squares is also a sum of four squares.


Proof
Proof by induction:
For all $n \in \N_{>0}$, let $\map P n$ be the proposition:

$\ds \exists w, x, y, z \in \Z: \prod_{j \mathop = 1}^n \paren {a_j^2 + b_j^2 + c_j^2 + d_j^2} = w^2 + x^2 + y^2 + z^2$

$\map P 1$ is true, as this just says:

$\exists w, x, y, z \in \Z: a^2 + b^2 + c^2 + d^2 = w^2 + x^2 + y^2 + z^2$
which is trivially true.


Basis for the Induction
$\map P 2$ is the case:

$\exists w, x, y, z \in \Z: \paren {a_1^2 + b_1^2 + c_1^2 + d_1^2} \paren {a_2^2 + b_2^2 + c_2^2 + d_2^2} = w^2 + x^2 + y^2 + z^2$
which follows from Product of Sums of Four Squares.
This is our basis for the induction.


Induction Hypothesis
Now we need to show that, if $\map P k$ is true, where $k \ge 2$, then it logically follows that $\map P {k + 1}$ is true.

So this is our induction hypothesis:

$\ds \exists w, x, y, z \in \Z: \prod_{j \mathop = 1}^k \paren {a_j^2 + b_j^2 + c_j^2 + d_j^2} = w^2 + x^2 + y^2 + z^2$

Then we need to show that it directly implies:

$\ds \exists w, x, y, z \in \Z: \prod_{j \mathop = 1}^{k + 1} \paren {a_j^2 + b_j^2 + c_j^2 + d_j^2} = w^2 + x^2 + y^2 + z^2$


Induction Step
This is our induction step:














\(\ds \)

\(\)







\(\ds \prod_{j \mathop = 1}^{k + 1} \paren {a_j^2 + b_j^2 + c_j^2 + d_j^2}\)




















\(\ds \)

\(=\)







\(\ds \paren {\prod_{j \mathop = 1}^k \paren {a_j^2 + b_j^2 + c_j^2 + d_j^2} } \paren {a_{k + 1}^2 + b_{k + 1}^2 + c_{k + 1}^2 + d_{k + 1}^2}\)




















\(\ds \)

\(=\)







\(\ds \paren {r^2 + s^2 + t^2 + u^2} \paren {a_{k + 1}^2 + b_{k + 1}^2 + c_{k + 1}^2 + d_{k + 1}^2}\)





from the induction hypothesis: for some $r, s, t, u, \in \Z$














\(\ds \)

\(=\)







\(\ds w^2 + x^2 + y^2 + z^2\)





from the basis for the induction: for some $w, x, y, z, \in \Z$




So $\map P k \implies \map P {k + 1}$ and the result follows by the Principle of Mathematical Induction.

Therefore:

$\ds \forall n \in \Z_{>0}: \exists w, x, y, z \in \Z: \prod_{j \mathop = 1}^n \paren {a_j^2 + b_j^2 + c_j^2 + d_j^2} = w^2 + x^2 + y^2 + z^2$
$\blacksquare$





