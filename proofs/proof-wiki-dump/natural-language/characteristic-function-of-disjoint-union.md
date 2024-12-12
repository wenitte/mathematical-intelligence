# 

Source: https://proofwiki.org/wiki/Characteristic_Function_of_Disjoint_Union

Theorem
Let $X$ be a set. 
Let $\sequence {D_n}_{n \mathop \in \N}$ be a sequence of pairwise disjoint subsets of $X$. 
Let: 

$\ds D = \bigcup_{n \mathop = 1}^\infty D_n$

Then: 

$\ds \chi_D = \sum_{n \mathop = 1}^\infty \chi_{D_n}$
where:

$\chi_D$ is the characteristic function of $D$
$\chi_{D_n}$ is the characteristic function of $D_n$.


Corollary
Let $\set {D_1, D_2, \ldots, D_N}$ be a set of pairwise disjoint subsets of $X$. 
Let: 

$\ds D = \bigcup_{n \mathop = 1}^N D_n$

Then: 

$\ds \chi_D = \sum_{n \mathop = 1}^N \chi_{D_n}$
where:

$\chi_D$ is the characteristic function of $D$
$\chi_{D_n}$ is the characteristic function of $D_n$.


Proof
We aim to show that: 

$\ds \sum_{n \mathop = 1}^\infty \map {\chi_{D_n} } x = \begin{cases}1 & x \in D \\ 0 & x \in X \setminus D\end{cases}$
at which point we will have the demand from the definition of a characteristic function.

Let $x \in D$. 
Then: 

$\ds x \in \bigcup_{n \mathop = 1}^\infty D_n$
From the definition of set union, we have: 

$x \in D_n$ for some $n \in \N$.
Since the sets $\sequence {D_n}_{n \mathop \in \N}$ are pairwise disjoint, we have: 

$x \in D_n$ for precisely one $n \in \N$.
That is, form the definition of a characteristic function:

$\map {\chi_{D_n} } x = 1$ for precisely one $n \in \N$.
So that: 

$\ds \sum_{n \mathop = 1}^\infty \map {\chi_{D_n} } x = 1$
as desired.

Let $x \in X \setminus D$.
Then: 

$\ds x \in X \setminus \bigcup_{n \mathop = 1}^\infty D_n$
so from the set difference:

$x \in X$ and $\ds x \not \in \bigcup_{n \mathop = 1}^\infty D_n$.
So, from the definition of set union:

$x \not \in D_n$ for all $n \in \N$.
That is, form the definition of a characteristic function:

$\map {\chi_{D_n} } x = 0$ for all $n \in \N$.
So that: 

$\ds \sum_{n \mathop = 1}^\infty \map {\chi_{D_n} } x = 0$
as desired.
$\blacksquare$





