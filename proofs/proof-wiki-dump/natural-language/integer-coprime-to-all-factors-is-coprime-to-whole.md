# 

Source: https://proofwiki.org/wiki/Integer_Coprime_to_all_Factors_is_Coprime_to_Whole



Theorem
Let $a, b \in \Z$.
Let $\ds b = \prod_{j \mathop = 1}^r b_j$
Let $a$ be coprime to each of $b_1, \ldots, b_r$.

Then $a$ is coprime to $b$.

In the words of Euclid:

If two numbers be prime to any number, their product also will be prime to the same.
(The Elements: Book $\text{VII}$: Proposition $24$)


Proof
From Integer Combination of Coprime Integers:

$\forall j \in \set {1, 2, \ldots, r}: a x_j + b_j y_j = 1$
for some $x_j, y_j \in \Z$.
Thus:

$\ds \prod_{j \mathop = 1}^r b_j y_j = \prod_{j \mathop = 1}^r \paren {1 - a x_j}$
But $\ds \prod_{j \mathop = 1}^r \paren {1 - a x_j}$ is of the form $1 - a z$.
Thus:














\(\ds \prod_{j \mathop = 1}^r b_j \prod_{j \mathop = 1}^r y_j\)

\(=\)







\(\ds 1 - a z\)














\(\ds \leadsto \ \ \)





\(\ds a z + b y\)

\(=\)







\(\ds 1\)





where $\ds y = \prod_{j \mathop = 1}^r y_j$



and so, by Integer Combination of Coprime Integers, $a$ and $b$ are coprime.
$\blacksquare$


Also see
Integer Coprime to Factors is Coprime to Whole: the specific case where $r = 2$


Sources
1982: P.M. Cohn: Algebra Volume 1 (2nd ed.) ... (previous) ... (next): Chapter $2$: Integers and natural numbers: $\S 2.2$: Divisibility and factorization in $\mathbf Z$: Lemma $2$




