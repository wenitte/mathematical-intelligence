# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Closed_Set_in_Normed_Vector_Space



Theorem
The following definitions of the concept of Closed Set in the context of Normed Vector Spaces are equivalent:
Let $V = \struct {X, \norm {\, \cdot \,}}$ be a normed vector space.
Let $F \subseteq X$.

Definition 1
$F$ is closed in $V$ if and only if its complement $X \setminus F$ is open in $V$.

Definition 2
$F$ is closed (in $V$) if and only if every limit point of $F$ is also a point of $F$.

That is: if and only if $F$ contains all its limit points.


Proof
Let $\sequence {x_n}_{n \mathop \in \N}$ be a sequence in $F$ with a limit point $x$ in $X$.


Definition 1 implies Definition 2
Let $F$ be closed in $V$ according to Definition 1:

$F$ is closed in $V$ if and only if its complement $X \setminus F$ is open in $V$.

Aiming for a contradiction, suppose $x \notin F$.
Since $F$ is closed, $X \setminus F$ is open.
Let $\map {B_\epsilon} x := \set {y \in X : \norm {y - x} < \epsilon}$ be an open ball.
Then there exists $\map {B_\epsilon} x$, which belongs to $X \setminus F$:

$\forall x \in X \setminus F: \exists \epsilon \in \R_{>0}: \map {B_\epsilon} x \subset X \setminus F$
$\sequence {x_n}_{n \mathop \in \N}$ converges to $x$.
Therefore:

$\forall \epsilon \in \R_{>0} : \exists N \in \N : \forall n \in N : n > N \implies \norm {x_n - x} < \epsilon$
Hence:

$\norm {x_{N + 1} - x} < \epsilon$
Then we have:

$x_{N + 1} \in \map {B_\epsilon} x \subset X \setminus F$
But at the same time:

$x_{N + 1} \in F$
and we have reached a contradiction.
Hence there is no such $x$ which is not in $F$.
It follows that every limit point of $F$ is also a point of $F$.
That is, $F$ is closed in $V$ according to Definition 2.
$\Box$


Definition 2 implies Definition 1
Let $F$ be closed in $V$ according to Definition 2:

$F$ is closed (in $V$) if and only if every limit point of $F$ is also a point of $F$.

We are given that $x$ is a limit point of $F$.
Let $x \in F$.
Aiming for a contradiction, suppose $X \setminus F$ is not open.
Then:

$\neg \paren {\forall x \in X \setminus F : \exists \epsilon \in \R_{> 0} : \map {B_\epsilon} x \subseteq X \setminus F}$
By Assertion of Existence, this is equivalent to:

$(1): \quad \exists x \in X \setminus F : \forall \epsilon \in \R_{> 0} : \map {B_\epsilon} x \cap F \ne \O$
Set $\epsilon = \dfrac 1 n$ with $n \in \N$.
Then:

$\exists n \in \N : x_n \in \map {B_\epsilon} x \cap F$
So there is a sequence $\sequence {x_n}_{n \mathop \in \N}$ in $F$ such that:

$\forall n \in \N : \norm {x - x_n} < \dfrac 1 n$
and $x_n$ converges to $x$ in $F$.
By $(1)$:

$x \in X \setminus F$
That is:

$x \notin F$
This contradicts the condition in the definition that $x \in F$.
Hence, $X \setminus F$ has to be open.
That is, $F$ is closed in $V$ according to Definition 1.
$\blacksquare$


Sources
2017: Amol Sasane: A Friendly Approach to Functional Analysis ... (previous) ... (next): Chapter $\S 1.4$: Normed and Banach spaces. Sequences in a normed space; Banach spaces




