# 

Source: https://proofwiki.org/wiki/Characterization_of_Norm-to-Weak_and_Weak-to-Weak_Continuity_of_Linear_Transformations



Theorem
Let $\GF \in \set {\R, \C}$. 
Let $\struct {X, \norm {\, \cdot \,}_X}$ and $\struct {Y, \norm {\, \cdot \,}_Y}$ be normed vector spaces over $\GF$.
Let $w_X$ be the weak topology on $X$.
Let $w_Y$ be the weak topology on $Y$.
Let $T : X \to Y$ be a linear transformation. 

The following statements are equivalent:

$(1): \quad$ $T$ is $\struct {\norm {\, \cdot \,}_X, \norm {\, \cdot \,}_Y}$-continuous
$(2): \quad$ $T$ is $\struct {\norm {\, \cdot \,}_X, w_Y}$-continuous
$(3): \quad$ $T$ is $\struct {w_X, w_Y}$-continuous.


Proof
Let $X^\ast$ and $Y^\ast$ be the normed dual spaces of $X$ and $Y$ respectively. 


$(1)$ implies $(2)$
Suppose that $T$ is $\tuple {\norm {\, \cdot \,}_X, \norm {\, \cdot \,}_Y}$-continuous.
We want to show that $T : \struct {X, \norm {\, \cdot \,}_X} \to \struct {Y, w_Y}$ is continuous.
By Continuity in Initial Topology, it is enough to argue that $f \circ T : \struct {X, \norm {\, \cdot \,}_X} \to \GF$ is continuous for each $f \in Y^\ast$.
This is immediate from Composite of Continuous Mappings is Continuous.
$\Box$


$(2)$ implies $(3)$
Suppose that $T$ is $\tuple {\norm {\, \cdot \,}_X, w_Y}$-continuous.
By Continuity in Initial Topology, we have that: 

$f \circ T : \tuple {X, \norm {\, \cdot \,}_X} \to \GF$ is continuous.
From Characterization of Continuous Linear Functionals in Weak Topology, we have that: 

$f \circ T : \tuple {X, w_X} \to \GF$ is continuous.
From Continuity in Initial Topology, we have that $T$ is $\tuple {\norm {\, \cdot \,}_X, w_Y}$-continuous.
$\Box$


$(3)$ implies $(1)$
Suppose that $T$ is $\tuple {w_X, w_Y}$-continuous.
Aiming for a contradiction, suppose that $T$ is not $\tuple {\norm {\, \cdot \,}_X, \norm {\, \cdot \,}_Y}$-continuous.
From Continuity of Linear Transformations, we have that $T$ is not bounded.
We argue that for each $n \in \N$, there must exist $x_n \in X$ with $\norm {x_n}_X \le \dfrac 1 n$ and $\norm {\map T {x_n} }_Y \mathop > n$.
If for some $n \in \N$, we had $\norm {\map T x}_Y \le n$ for all $x \in X$ with $\norm x_X \le \dfrac 1 n$, we would have: 

$\norm {\map T x}_Y \le n^2$
for all $x \in X$ with $\norm x_X \le 1$. 
This would contradict that $T$ is not bounded.
Now fix such a choice of $\sequence {x_n}_{n \mathop \in \N}$.
Since $\norm {x_n} \to 0$ as $n \to \infty$, we have that $x_n \to {\mathbf 0}_X$ as $n \to \infty$ by Sequence in Normed Vector Space Convergent to Limit iff Norm of Sequence minus Limit is Null Sequence.
From Convergent Sequence in Normed Vector Space is Weakly Convergent, we have that $x_n \to {\mathbf 0}_X$ in $\struct {X, w_X}$. 
From Continuous Mapping is Sequentially Continuous, $T$ is $\tuple {w_X, w_Y}$-sequentially continuous. 
So we have $\map T {x_n} \to \map T { {\mathbf 0}_X} = {\mathbf 0}_Y$ in $\struct {Y, w_Y}$. 
From Weakly Convergent Sequence in Normed Vector Space is Bounded, we then have that: 

$\ds \sup_{n \mathop \in \N} \norm {\map T {x_n} }_Y < \infty$
But we have constructed $\sequence {x_n}_{n \mathop \in \N}$ so that: 

$\norm {\map T {x_n} } > n$
which implies that: 

$\ds \sup_{n \mathop \in \N} \norm {\map T {x_n} }_Y = \infty$
This is a contradiction.
So $T$ is $\tuple {\norm {\, \cdot \,}_X, \norm {\, \cdot \,}_Y}$-continuous.
$\blacksquare$





