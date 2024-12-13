# 

Source: https://proofwiki.org/wiki/Mapping_whose_Image_of_Natural_Number_n_is_Subset_of_Image_of_Successor



Theorem
Let $f: \N \to A$ be a mapping from the set of natural numbers $\N$ to a class $A$.
Let $f$ have the property that:

$\forall n \in \N: \map f n \subseteq \map f {n^+}$
where $n^+$ is the successor of $n$.

Then:

$\forall n, m \in N: n \le m \implies \map f n \subseteq \map f m$


Corollary
Let $f$ have the property that:

$\forall n \in \N: \map f n \subsetneqq \map f {n^+}$
where $n^+$ is the successor of $n$.

Then:

$\forall n, m \in N: n < m \implies \map f n \subsetneqq \map f m$


Proof
Let us establish that:

$n = m \implies \map f n = \map f m$
and so:

$n = m \implies \map f n \subseteq \map f m$
Hence it is sufficient to demonstrate that:

$\forall n < m: \map f n \subseteq \map f m$

The proof will proceed by the Principle of Finite Induction on $\N$.
Let $S$ be the set defined as:

$S := \set {m \in \N: \forall n < m: \map f n \subseteq \map f m}$
That is, $S$ is to be the set of all $n$ such that:

$\forall n < m: \map f n \subseteq \map f m$

First we note that:

$\not \exists n \in \N: n < 0$
Thus $0 \in S$ vacuously.


Basis for the Induction
Consider the natural number $1$.
There is only one $n \in \N$ such that $n < 1$, and that is:

$n = 0$
By definition of $f$:

$\map f 0 \subseteq \map f {0^+}$
But by definition of the set of natural numbers:

$0^+ = 1$
So $1 \in S$.
This is the basis for the induction.


Induction Hypothesis
It is to be shown that if $k \in S$ where $k \ge 1$, then it follows that $k + 1 \in S$.
This is the induction hypothesis:

$\forall n < k: \map f n \subseteq \map f k$

It is to be demonstrated that it follows that:

$\forall n < k^+: \map f n \subseteq \map f {k^+}$


Induction Step
This is the induction step:
Let $k \in S$.
From the induction hypothesis:

$\forall n < k: \map f n \subseteq \map f k$
Then from the definition of $f$:

$\map f k \subseteq \map f {k^+}$
That is:

$\forall n \le k: \map f n \subseteq \map f {k^+}$
That is:

$\forall n < k^+: \map f n \subseteq \map f {k^+}$
So $k \in S \implies k^+ \in S$.
The result follows by the Principle of Finite Induction:

$\forall n, m \in N: n \le m \implies \map f n \subseteq \map f m$
$\blacksquare$


Sources
2010: Raymond M. Smullyan and Melvin Fitting: Set Theory and the Continuum Problem (revised ed.) ... (previous) ... (next): Chapter $3$: The Natural Numbers: $\S 5$ Applications to natural numbers: Exercise $5.2 \ \text{(a)}$




