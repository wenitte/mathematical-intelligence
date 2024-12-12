# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Compact_Linear_Transformation



Theorem
Let $\struct {X, \norm \cdot_X}$ and $\struct {Y, \norm \cdot_Y}$ be normed vector spaces.
Let $T : X \to Y$ be a linear transformation.

The following definitions of the concept of compact linear transformations are equivalent:

Definition 1
Let $\operatorname {ball} X$ be the closed unit ball in $\struct {X, \norm \cdot_X}$.

We say that $T$ is a compact linear transformation if and only if:

$\map \cl {\map T {\operatorname {ball} X} }$ is compact in $\struct {Y, \norm \cdot_Y}$

Although this article appears correct, it's inelegant. There has to be a better way of doing it.In particular: use $\mathsf{Pr} \infty \mathsf{fWiki}$ standard notationYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by redesigning it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Improve}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.
where $\cl$ denotes topological closure.


Definition 2
We say that $T$ is a compact linear transformation if and only if:

for each bounded sequence $\sequence {x_n}_{n \mathop \in \N}$ in $X$:
the sequence $\sequence {T x_n}_{n \mathop \in \N}$ has a subsequence convergent in $\struct {Y, \norm \cdot_Y}$.


Proof
Necessary Condition
Suppose that: 

$A$ is compact.
That is:

$\overline {\map A {\operatorname {ball} X} }$ is compact.
Let $\sequence {x_n}_{n \mathop \in \N}$ be a bounded sequence in $X$. 
Then there exists a positive real number $M > 0$ such that: 

$\norm {x_n}_X \le M$
for all $n \in \N$. 
Now define a sequence $\sequence {y_n}_{n \mathop \in \N}$ by: 

$\ds y_n = \frac {x_n} M$
for each $n \in \N$. 
Then for each $n \in \N$ we have: 














\(\ds \norm {y_n}_X\)

\(=\)







\(\ds \norm {\frac {x_n} M}_X\)




















\(\ds \)

\(=\)







\(\ds \frac {\norm {x_n}_X} M\)





using positive homogeneity of the norm














\(\ds \)

\(\le\)







\(\ds 1\)





since $\norm {x_n}_X \le M$



So:

$\sequence {y_n}_{n \mathop \in \N}$ is a sequence in $\operatorname {ball} X$.
Now define a sequence $\sequence {z_n}_{n \mathop \in \N}$ by: 

$\ds z_n = A y_n$
for each $n \in \N$. 
Then: 

$\sequence {z_n}_{n \mathop \in \N}$ is a sequence in $\map A {\operatorname {ball} X}$
Since:

$\map A {\operatorname {ball} X} \subseteq \overline {\map A {\operatorname {ball} X} }$
we have:

$\sequence {z_n}_{n \mathop \in \N}$ is a sequence in $\overline {\map A {\operatorname {ball} X} }$
Since $\overline {\map A {\operatorname {ball} X} }$ is compact, we have that: 

there exists a convergent subsequence $\sequence {z_{n_j} }$ of $\sequence {z_n}_{n \mathop \in \N}$ with limit in $\overline {\map A {\operatorname {ball} X} }$.
So: 

the sequence $\sequence {A y_{n_j} }$ converges.
Let: 

$\ds y = \lim_{j \mathop \to \infty} A y_{n_j}$
Then: 

$\ds y = \lim_{j \mathop \to \infty} \map A {\frac {x_{n_j} } M}$
so, since $A$ is linear:

$A x_{n_j} \to M y$
as $j \to \infty$.
So: 

the sequence $\sequence {x_{n_j} }$ is such that $\sequence {A x_{n_j} }$ converges.
Since $\sequence {x_n}_{n \mathop \in \N}$ was an arbitrary bounded sequences, we have: 

all bounded sequences $\sequence {x_n}_{n \mathop \in \N}$ in $X$ have a subsequence $\sequence {x_{n_j} }$ such that the sequence $\sequence {A x_{n_j} }$ converges.
$\Box$


Sufficient Condition
Suppose that: 

for all bounded sequences $\sequence {x_n}_{n \mathop \in \N}$ in $X$, there exists a subsequence $\sequence {x_{n_j} }$ such that the sequence $\sequence {A x_{n_j} }$ converges.
From the definition of a compact operator, we aim to show that: 

$\overline {\map A {\operatorname {ball} X} }$ is compact.
That is: 

all sequences $\sequence {y_n}_{n \mathop \in \N}$ in $\overline {\map A {\operatorname {ball} X} }$ have a convergent subsequence $\sequence {y_{n_k} }$ with limit in $\overline {\map A {\operatorname {ball} X} }$.
Note that from Topological Closure is Closed, we have: 

$\overline {\map A {\operatorname {ball} X} }$ is closed in $Y$.
So, from the definition of a closed set in a normed vector space:

if a sequence in $\overline {\map A {\operatorname {ball} X} }$ converges, it has limit in $\overline {\map A {\operatorname {ball} X} }$.
So it suffices to find a subsequence with limit in $Y$. 
Let $\sequence {y_n}_{n \mathop \in \N}$ be a sequence in $\overline {\map A {\operatorname {ball} X} }$.
We now construct a sequence $\sequence {x_n}_{n \mathop \in \N}$ in $\map A {\operatorname {ball} X}$ that approximates $\sequence {y_n}_{n \mathop \in \N}$.
For each $n \in \N$, we have $y_n \in \overline {\map A {\operatorname {ball} X} }$, so there exists some $h \in \map A {\operatorname {ball} X}$ such that: 

$\ds \norm {y_n - h}_Y < \frac 1 n$
by the definition of closure. 
For each $n \in \N$, let $z_n$ be any such $h$.
Since $z_n \in \map A {\operatorname {ball} X}$, there exists $x_n \in \operatorname {ball} X$ such that: 

$z_n = A x_n$
Since $x_n \in \operatorname {ball} X$, we also have: 

$\norm {x_n}_X \le 1$
for each $n \in \N$. 
So:

$\sequence {x_n}_{n \mathop \in \N}$ is bounded.
So, by assumption:

there exists a subsequence $\sequence {x_{n_j} }$ of $\sequence {x_n}_{n \mathop \in \N}$ such that the sequence $\sequence {A x_{n_j} }$ converges.
Let: 

$\ds y = \lim_{j \mathop \to \infty} A x_{n_j}$
We show that: 

$y_{n_j} \to y$
We have:














\(\ds \norm {y_{n_j} - y}_Y\)

\(=\)







\(\ds \norm {y_{n_j} - y + A x_{n_j} - A x_{n_j} }_Y\)




















\(\ds \)

\(\le\)







\(\ds \norm {y_{n_j} - A x_{n_j} }_Y + \norm {A x_{n_j} - y}_Y\)





since the norm satisfies the triangle inequality














\(\ds \)

\(<\)







\(\ds \frac 1 {n_j} + \norm {A x_{n_j} - y}_Y\)





since $\norm {A x_n - y}_Y < n^{-1}$ for each $n \in \N$



Let $\epsilon$ be a positive real number. 
Since $n_j \to \infty$ by the definition of subsequence, we have: 

$\ds \frac 1 {n_j} \to 0$
So there exists $N_1 \in \N$ such that: 

$\ds \frac 1 {n_j} < \frac \epsilon 2$
for $n > N_1$. 
By the definition of convergence, since: 

$\ds y = \lim_{j \mathop \to \infty} A x_{n_j}$
there exists $N_2 \in \N$ such that: 

$\ds \norm {A x_{n_j} - y}_Y < \frac \epsilon 2$
for $n > N_2$.
Let:

$N = \max \set {N_1, N_2}$
Then, for $n > N$, we have: 

$\norm {y_{n_j} - y}_Y < \epsilon$
So, since $\epsilon > 0$ was arbitrary we have:

$y_{n_j} \to y$
So $\sequence {y_{n_j} }$ is a convergent subsequence of $\sequence {y_n}_{n \mathop \in \N}$. 
Since $\sequence {y_n}_{n \mathop \in \N}$ was arbitrary, we have that: 

any sequence $\sequence {y_n}_{n \mathop \in \N}$ in $\overline {\map A {\operatorname {ball} X} }$ has a convergent subsequence $\sequence {y_{n_j} }$ with limit in $\overline {\map A {\operatorname {ball} X} }$.
So: 

$\overline {\map A {\operatorname {ball} X} }$ is compact.
Hence:

$A$ is compact.
$\blacksquare$





