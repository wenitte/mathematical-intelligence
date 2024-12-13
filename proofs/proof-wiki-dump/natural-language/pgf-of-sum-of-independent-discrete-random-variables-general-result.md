# 

Source: https://proofwiki.org/wiki/PGF_of_Sum_of_Independent_Discrete_Random_Variables/General_Result



Theorem
Let:

$Z = X_1 + X_2 + \cdots + X_n$
where each of $X_1, X_2, \ldots, X_n$ are independent discrete random variables with PGFs $\map {\Pi_{X_1} } s, \map {\Pi_{X_2} } s, \ldots, \map {\Pi_{X_n} } s$.

Then:

$\ds \map {\Pi_Z} s = \prod_{j \mathop = 1}^n \map {\Pi_{X_j} } s$


Proof
Proof by induction:
For all $n \in \N_{> 0}$, let $\map P n$ be the proposition:

$\ds \map {\Pi_Z} s = \prod_{j \mathop = 1}^m \map {\Pi_{X_j} } s$
whenever $m \le n$
$\map P 1$ is true, as this just says $\map {\Pi_{X_1} } s = \map {\Pi_{X_1} } s$.


Basis for the Induction
$\map P 2$ is the case:

$\map {\Pi_{X + Y} } s = \map {\Pi_X} s \, \map {\Pi_Y} s$
which is proved in PGF of Sum of Independent Discrete Random Variables.
This is our basis for the induction.


Induction Hypothesis
Now we need to show that, if $\map P j$ is true, where $j \ge 2$, then it logically follows that $\map P {k + 1}$ is true.

So this is our induction hypothesis:

$\ds \map {\Pi_Z} s = \prod_{j \mathop = 1}^m \map {\Pi_{X_j} } s$
whenever $m \le k$.

Then we need to show:

$\ds \map {\Pi_Z} s = \prod_{j \mathop = 1}^m \map {\Pi_{X_j} } s$
whenever $m \le {k + 1}$.


Induction Step
This is our induction step:
Let $Z = X_1 + X_2 + \cdots + X_k + X_{k + 1}$














\(\ds \map {\Pi_Z} s\)

\(=\)







\(\ds \map {\Pi_{X_1 + X_2 + \cdots + X_k + X_{k + 1} } } s\)





Definition of $Z$














\(\ds \)

\(=\)







\(\ds \map {\Pi_{\paren {X_1 + X_2 + \cdots + X_k} + X_{k + 1} } } s\)




















\(\ds \)

\(=\)







\(\ds \map {\Pi_{\paren {X_1 + X_2 + \cdots + X_k} } } s \, \map {\Pi_{X_{k + 1} } } s\)





Basis for the Induction














\(\ds \)

\(=\)







\(\ds \prod_{j \mathop = 1}^k \map {\Pi_{X_j} } s \, \map {\Pi_{X_{k + 1} } } s\)





Induction Hypothesis














\(\ds \)

\(=\)







\(\ds \prod_{j \mathop = 1}^{k + 1} \map {\Pi_{X_j} } s\)









So $\map P k \implies \map P {k + 1}$ and the result follows by the Principle of Mathematical Induction.

Therefore:

$\forall n \in \N: \map {\Pi_Z} s = \ds \prod_{j \mathop = 1}^n \map {\Pi_{X_j} } s$
$\blacksquare$


Sources
1986: Geoffrey Grimmett and Dominic Welsh: Probability: An Introduction ... (previous) ... (next): $\S 4.4$: Sums of independent random variables: Theorem $4 \ \text{C}$




