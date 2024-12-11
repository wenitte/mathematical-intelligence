# 

Source: https://proofwiki.org/wiki/Absolute_Value_of_Divergent_Infinite_Product



Theorem
Let $\struct {\mathbb K, \norm {\,\cdot\,} }$ be a valued field.
The infinite product $\ds \prod_{n \mathop = 1}^\infty a_n$ diverges to $0$ if and only if $\ds \prod_{n \mathop = 1}^\infty \norm {a_n}$ diverges to $0$.


Proof
1 implies 2
Case 1
Let there be infinitely many $n \in \N$ such that $a_n = 0$.
Then there are infinitely many $n \in \N$ such that $\size {a_n} = 0$.
Thus $\ds \prod_{n \mathop = 1}^\infty \norm {a_n}$ diverges to $0$.


Case 2
Let $n_0 \in \N$ such that $a_n \ne 0$ for $n \ge n_0$.
Then $\norm {a_n} \ne 0$ for $n \ge n_0$.
By definition of divergent product:

$\ds \lim_{N \mathop \to \infty} \prod_{n \mathop = n_0}^N a_n = 0$
By Absolute Value of Limit of Sequence:

$\ds \lim_{N \mathop \to \infty} \prod_{n \mathop = n_0}^N \norm {a_n} = 0$
Thus $\ds \prod_{n \mathop = 1}^\infty \norm {a_n}$ diverges to $0$.
$\Box$


2 implies 1
Case 1
Let there be infinitely many $n \in \N$ such that $\norm {a_n} = 0$.
Then there are infinitely many $n \in \N$ such that $a_n = 0$.
Thus $\ds \prod_{n \mathop = 1}^\infty a_n$ diverges to $0$.


Case 2
Let $n_0 \in \N$ such that $\norm {a_n} \ne 0$ for $n \ge n_0$.
Then $a_n \ne 0$ for $n \ge n_0$.
By definition of divergent product:

$\ds \lim_{N \mathop \to \infty} \prod_{n \mathop = n_0}^N \norm {a_n} = 0$
By Absolute Value of Limit of Sequence:

$\ds \lim_{N \mathop \to \infty} \prod_{n \mathop = n_0}^N a_n = 0$
Thus $\ds \prod_{n \mathop = 1}^\infty a_n$ diverges to $0$.
$\blacksquare$


Also see
Absolute Value of Infinite Product, for related results




