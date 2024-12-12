# 

Source: https://proofwiki.org/wiki/Equivalence_of_Defintions_of_Ergodic_Measure-Preserving_Transformation



Theorem
Let $\struct {X, \BB, \mu}$ be a probability space.
Let $T: X \to X$ be a measure-preserving transformation.

The following definitions of the concept of Ergodic Measure-Preserving Transformation are equivalent:

Definition 1
$T$ is said to be ergodic if and only if:

for all $A \in \BB$:
$T^{-1} \sqbrk A = A \implies \map \mu A \in \set {0, 1}$
Definition 2
$T$ is said to be ergodic if and only if:

for all $A \in \BB$:
$\map \mu {T^{-1} \sqbrk A \symdif A} = 0 \implies \map \mu A \in \set {0, 1}$
where $\symdif$ denotes the symmetric difference.

Definition 3
$T$ is said to be ergodic if and only if:

for all $A \in \BB$:
$\ds \map \mu A > 0 \implies \map \mu {\bigcup_{n \mathop = 1}^\infty T^{-n} \sqbrk A} = 1$
Definition 4
$T$ is said to be ergodic if and only if:

for all $A, B \in \BB$:
$\map \mu A \map \mu B > 0 \implies \exists n \ge 1 : \, \map \mu {T^{-n} \sqbrk A \cap B} > 0$
Definition 5
$T$ is said to be ergodic if and only if:

for all measurable $f: X \to \C$:
$f \circ T = f$ holds $\mu$-almost everywhere
$\implies \exists c \in \C:\, f = c$ holds $\mu$-almost everywhere


Proof
Definition 1 implies Definition 2
First, we claim that for each $j \in \N$:

$\map \mu {T^{-j} \sqbrk A \symdif A} = 0$.
Indeed, applying Symmetric Difference is Subset of Union of Symmetric Differences, inductively:














\(\ds T^{-j} \sqbrk A \symdif A\)

\(\subseteq\)







\(\ds \bigcup _{i = 0} ^{j-1} T^{-\paren {i+1} }\sqbrk A \symdif T^{-i} \sqbrk A\)




















\(\ds \)

\(=\)







\(\ds \bigcup _{i = 0} ^{j-1} T^{-i} \sqbrk {T^{-1} \sqbrk A \symdif A}\)









so that:














\(\ds \map \mu {T^{-j} \sqbrk A \symdif A}\)

\(\le\)







\(\ds \sum _{i = 0} ^{j-1} \map \mu { T^{-i} \sqbrk {T^{-1} \sqbrk A \symdif A} }\)




















\(\ds \)

\(=\)







\(\ds \sum _{i = 0} ^{j-1} \map \mu { T^{-1} \sqbrk A \symdif A }\)




















\(\ds \)

\(=\)







\(\ds 0\)









Next, let:

$\ds A_\infty := \bigcap _{N \mathop \ge 1} \bigcup _{j \mathop \ge N} T^{-j} \sqbrk A$
Then $A_\infty \in \set {0, 1}$, since:

$T^{-1} \sqbrk {A_\infty} = A_\infty$
Therefore, we shall show $\map \mu A = \map \mu {A_\infty}$.
Observe:














\(\ds \map \mu {A_\infty}\)

\(=\)







\(\ds \map \mu {\bigcap _{N \mathop \ge 1} \bigcup _{j \mathop \ge N} T^{-j} \sqbrk A}\)




















\(\ds \)

\(=\)







\(\ds \lim _{N \to \infty} \map \mu {\bigcup _{j \mathop \ge N} T^{-j} \sqbrk A}\)




















\(\ds \)

\(=\)







\(\ds \lim _{N \to \infty} \map \mu {T^{-N} \sqbrk {\bigcup _{j \mathop \ge 0} T^{-j} \sqbrk A} }\)




















\(\ds \)

\(=\)







\(\ds \lim _{N \to \infty} \map \mu {\bigcup _{j \mathop \ge 0} T^{-j} \sqbrk A}\)




















\(\ds \)

\(=\)







\(\ds \map \mu {\bigcup _{j \mathop \ge 0} T^{-j} \sqbrk A}\)









Therefore:














\(\ds 0\)

\(\le\)







\(\ds \map \mu {A_\infty} - \map \mu A\)




















\(\ds \)

\(=\)







\(\ds \map \mu { \paren {\bigcup _{j \mathop \ge 0} T^{-j} \sqbrk A} \setminus A}\)




















\(\ds \)

\(=\)







\(\ds \map \mu {\bigcup _{j \mathop \ge 0} \paren { T^{-j} \sqbrk A \setminus A} }\)




















\(\ds \)

\(\le\)







\(\ds \sum _{j \mathop \ge 0} \map \mu {T^{-j} \sqbrk A \setminus A}\)




















\(\ds \)

\(=\)







\(\ds 0\)









$\Box$


Definition 2 implies Definition 3
Let:

$\ds B := \bigcup_{n \mathop = 1}^\infty T^{-n} \sqbrk A$
Then:

$T^{-1} \sqbrk B = \bigcup_{n \mathop = 2}^\infty T^{-n} \sqbrk A \subseteq B$
so that:

$\map \mu {T^{-1} \sqbrk B \symdif B} = \map \mu {T^{-1} \sqbrk B} - \map \mu B = 0$
Thus $\map \mu B \in \set {0,1}$.
As $\map \mu B > 0$, we have $\map \mu B = 1$.
$\Box$


Definition 3 implies Definition 4
Let $\map \mu A \map \mu B > 0$.
As $\map \mu A > 0$, we have:

$\ds \map \mu {\bigcup_{n \mathop = 1}^\infty T^{-n} \sqbrk A} = 1$
Thus:














\(\ds 0\)

\(<\)







\(\ds \map \mu B\)




















\(\ds \)

\(=\)







\(\ds \map \mu {\paren {\bigcup_{n \mathop = 1}^\infty T^{-n} \sqbrk A} \cap B }\)




















\(\ds \)

\(=\)







\(\ds \map \mu {\bigcup_{n \mathop = 1}^\infty \paren { T^{-n} \sqbrk A \cap B } }\)




















\(\ds \)

\(\le\)







\(\ds \sum_{n \mathop = 1}^\infty \map \mu { T^{-n} \sqbrk A \cap B }\)









Therefore there must exist an $n \ge 1$ such that:

$\map \mu { T^{-n} \sqbrk A \cap B } > 0$.
$\Box$


Definition 4 implies Definition 1
Let $A \in \BB$ be such that $T^{-1} \sqbrk A = A$.
Let $B := X \setminus A$ so that:

$\map \mu B = 1 - \map \mu A$
Since:

$\forall n \ge 1 : T^{-n} \sqbrk A \cap B = A \cap B = \O$
we have by hypothesis:

$\map \mu A \map \mu B = 0$
That is:

$\map \mu A \paren {1 - \map \mu A} = 0$
Therefore:

$\map \mu A \in \set {0,1}$
$\Box$


Definition 2 implies Definition 5
Since:

$\ds \set {\map \Re f \circ T \ne \map \Re f} \cup \set {\map \Im f \circ T \ne \map \Im f} \subseteq \set {f \circ T \ne f}$
the assumption:
$\ds \map \mu {\set {f \circ T \ne f} } = 0$
implies:

$\ds \map \mu {\set {\map \Re f \circ T \ne \map \Re f} } = 0$
and:

$\ds \map \mu {\set {\map \Im f \circ T \ne \map \Im f} } = 0$
Without loss of generality, we may therefore assume $f : X \to \R$.

Consider the increasing function $ F : \R \to \R$ defined by:

$\map F c := \map \mu { \set {f \le c} }$
Observe that:

$\ds \lim _{x \mathop \to -\infty} \map F x = \map \mu {\set {f = -\infty} } = 0$
and:

$\ds \lim _{x \mathop \to +\infty} \map F x = \map \mu {\set {f < +\infty} } = 1$
Moreover, for each $c \in \R$, since:














\(\ds \set { f \circ T \le c } \symdif \set {f \le c}\)

\(=\)







\(\ds \set { f \circ T \le c < f } \cup \set {f < c \le f \circ T }\)




















\(\ds \)

\(\subseteq\)







\(\ds \set { f \circ T < f } \cup \set {f < f \circ T }\)




















\(\ds \)

\(=\)







\(\ds \set {f \circ T \ne f}\)









we have:

$\map \mu {\set { f \circ T \le c } \symdif \set {f \le c} } = 0$
so that:

$\map F c \in \set {0,1}$.
Therefore there is a $c \in \R$ such that:

$\ds c = \sup \set {x \in \R : \map F x = 0} = \inf \set {x \in \R : \map F x = 1}$
For each $n \in \N_{>0}$:

$\map \mu {\set { c - \dfrac 1 n < f \le c + \dfrac 1 n } } = \map F {c + \dfrac 1 n} - \map F {c - \dfrac 1 n} = 1$
By $n \to \infty$:

$\map \mu {\set { f = c } } = 1$
$\Box$


Definition 5 implies Definition 1
Let $T^{-1} \sqbrk A = A$.
Let $f := \chi _A$ be the characteristic function of $A$ so that:

$f \circ T = f$.
Then there is a $c \in \set {0,1}$ such that:

$\map \mu {\set {f = c} } = 1$
Since:

$\map \mu {\set {f = 0} } + \map \mu {\set {f = 1} } = 1$
it follows that:

$\map \mu A = \map \mu {\set {f = 1} } = \begin{cases} 0 &: c=0 \\ 1 &: c=1 \end{cases}$
$\blacksquare$





