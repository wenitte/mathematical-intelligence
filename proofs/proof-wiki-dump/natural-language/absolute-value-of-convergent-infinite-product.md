# 

Source: https://proofwiki.org/wiki/Absolute_Value_of_Convergent_Infinite_Product

Theorem
Let $\struct {\mathbb K, \norm {\,\cdot\,} }$ be a valued field.
Let the infinite product $\ds \prod_{n \mathop = 1}^\infty a_n$ converge to $a \in \mathbb K$.

Then $\ds \prod_{n \mathop = 1}^\infty \norm {a_n}$  converges to $\norm{a}$.


Proof
By Absolute Value of Limit of Sequence:

$\ds \prod_{n \mathop = 1}^\infty \norm {a_n} = \norm a$
It remains to show that the product converges.
By the convergence, there exists $n_0 \in \N$ such that $a_n \ne 0$ for $n \ge n_0$.
Then $\norm {a_n} \ne 0$ for $n \ge n_0$.
Let $P_n$ denote the $n$th partial product of $\ds \prod_{n \mathop = n_0}^\infty a_n$.
Then $\norm {P_n}$ is the $n$th partial product of $\ds \prod_{n \mathop = n_0}^\infty \norm {a_n}$.
Let $P_n$ converge to $b \in \mathbb K \setminus \set 0$.
By Convergence of Absolute Value of Sequence:

$\norm {P_n} \to \norm b \in \mathbb K \setminus \set 0$.
Thus $\ds \prod_{n \mathop = 1}^\infty \norm {a_n}$ converges.
$\blacksquare$


Also see
Absolute Value of Infinite Product, for related results




