# 

Source: https://proofwiki.org/wiki/Bounded_Linear_Transformation_to_Banach_Space_has_Unique_Extension_to_Closure_of_Domain



Theorem
Let $\Bbb F \in \set {\R, \C}$. 
Let $\struct {X, \norm \cdot_X}$ be a normed vector space over $\Bbb F$.
Let $\map D {T_0}$ be a linear subspace of $X$.
Let $\struct {Y, \norm \cdot_Y}$ be a Banach space over $\Bbb F$.
Let $T_0 : \map D {T_0} \to Y$ be a bounded linear transformation.

Then there exists a unique bounded linear transformation $T : \map D T \to Y$ extending $T_0$ to $\map D T = \paren {\map D {T_0} }^-$. 


Corollary 1
Let $\map D {f_0}$ be a linear subspace of $X$.
Let $f_0 : \map D {f_0} \to \Bbb F$ be a bounded linear functional.

Then there exists a unique bounded linear functional $f : \map D f \to \Bbb F$ extending $f_0$ to $\map D f = \paren {\map D {f_0} }^-$.


Corollary 2
Let $D$ be an everywhere dense linear subspace of $X$.
Let $T_1 : X \to Y$ and $T_2 : X \to Y$ be bounded linear transformations with: 

$T_1 x = T_2 x$ for all $x \in D$.

Then: 

$T_1 = T_2$


Corollary 3
Let $\Bbb F \in \set {\R, \C}$. 
Let $\struct {X, \norm \cdot_X}$ be a normed vector space over $\Bbb F$.
Let $\map D {T_0}$ be a linear subspace of $X$.
Let $\struct {Y, \norm \cdot_Y}$ be a Banach space over $\Bbb F$.
Let $T_0 : \map D {T_0} \to Y$ be a linear isometry.

Then there exists a unique linear isometry $T : \map D T \to Y$ extending $T_0$ to $\map D T = \paren {\map D {T_0} }^-$. 


Proof
Existence
Since $T_0$ is bounded, there exists a real number $M > 0$ such that: 

$\norm {T_0 x}_Y \le M \norm x_X$ for all $x \in \map D {T_0}$.
Let $x \in \map D T \setminus \map D {T_0}$.
From Point in Closure of Subset of Metric Space iff Limit of Sequence, there exists a sequence $\sequence {x_n}_{n \mathop \in \N}$ in $\map D {T_0}$ with $x_n \to x$. 
We would like to set: 

$\ds T x = \lim_{n \mathop \to \infty} T_0 x_n$
We show that this limit exists and gives a unique choice independent of the sequence $\sequence {x_n}_{n \mathop \in \N}$. 
Let $\sequence {x_n}_{n \mathop \in \N}$ and $\sequence {z_n}_{n \mathop \in \N}$ be sequences in $\map D {T_0}$ converging to $x$. 
We have: 














\(\ds \norm {T_0 x_n - T_0 x_m}_Y\)

\(=\)







\(\ds \norm {\map {T_0} {x_n - x_m} }_Y\)




















\(\ds \)

\(\le\)







\(\ds M \norm {x_n - x_m}_X\)









From Convergent Sequence in Normed Vector Space is Cauchy Sequence, we have that: 

$\sequence {x_n}_{n \mathop \in \N}$ is a Cauchy sequence.
So, for each $\epsilon > 0$ there exists $N \in \N$ such that: 

$\norm {x_n - x_m}_X < \epsilon/M$
for $n, m \ge N$. 
Then, we have: 

$\norm {T_0 x_n - T_0 x_m}_Y < \epsilon$
So $\sequence {T_0 x_n}_{n \mathop \in \N}$ is a Cauchy sequence in $Y$. 
Since $Y$ is a Banach space, $\sequence {T_0 x_n}_{n \mathop \in \N}$ converges to $z_1$.
Swapping $\sequence {x_n}_{n \mathop \in \N}$ for $\sequence {z_n}_{n \mathop \in \N}$, we get that $T z_n \to z_2$. 
We show that $z_1 = z_2$. 
From Modulus of Limit: Normed Vector Space, we have: 

$\norm {T_0 x_n - T_0 z_n} \to \norm {z_1 - z_2}$
On the other hand: 














\(\ds \norm {T_0 x_n - T_0 z_n}\)

\(=\)







\(\ds \norm {\map {T_0} {x_n - z_n} }\)




















\(\ds \)

\(\le\)







\(\ds M \norm {x_n - z_n}\)




















\(\ds \)

\(\le\)







\(\ds M \norm {x_n - x} + M \norm {z_n - x}\)





using the triangle inequality for the norm














\(\ds \)

\(\to\)







\(\ds 0\)





Sequence in Normed Vector Space Convergent to Limit iff Norm of Sequence minus Limit is Null Sequence



From Convergent Sequence in Normed Vector Space has Unique Limit:

$z_1 = z_2$
So we can extend $T_0$ to $\map D T$ by taking: 

$\ds T x = \lim_{n \mathop \to \infty} T_0 x_n$
for any $x \in \map D T \setminus \map D {T_0}$, where $\sequence {x_n}_{n \mathop \in \N}$ is any sequence with $x_n \to x$. 
We now need to verify that the obtained $T$ is indeed linear and bounded.
Let $x, y \in \map D T$, $\lambda \in \Bbb F$ and sequences $\sequence {x_n}_{n \mathop \in \N}$ and $\sequence {y_n}_{n \mathop \in \N}$ with $x_n \to x$ and $y_n \to y$. 
Then: 














\(\ds \map T {\lambda x + y}\)

\(=\)







\(\ds \lim_{n \mathop \to \infty} \map {T_0} {\lambda x_n + y_n}\)




















\(\ds \)

\(=\)







\(\ds \lim_{n \mathop \to \infty} \paren {\lambda T_0 x_n + T_0 y_n}\)




















\(\ds \)

\(=\)







\(\ds \lambda \lim_{n \mathop \to \infty} T_0 x_n + \lim_{n \mathop \to \infty} T_0 y_n\)





Combined Sum Rule for Sequences in Normed Vector Space














\(\ds \)

\(=\)







\(\ds \lambda T x + T y\)





recalling the definition of $T$



so $T$ is certainly linear. 
We finish by showing that $T$ is bounded.
Let $\sequence {x_n}_{n \mathop \in \N}$ be a sequence converging to $x$. 
Now, from Modulus of Limit: Normed Vector Space, we have: 

$\norm {T_0 x_n} \to \norm {T x}$
and:

$\norm {x_n} \to \norm x$
Since $T_0$ is bounded, there exists a real number $M > 0$ such that: 

$\norm {T_0 x_n} \le M \norm {x_n}$ for all $x \in \map D {T_0}$.
Taking $n \to \infty$, we have: 

$\norm {T x} \le M \norm x$
from Limits Preserve Inequalities.
So $T$ is a bounded linear transformation extending $T_0$ to $\map D T$. 
$\Box$


Uniqueness
Let $T'$ be another bounded linear transformation extending $T_0$ to $\paren {\map D T}^-$. 
Let $x \in \paren {\map D T}^-$ and pick a sequence $\sequence {x_n}_{n \mathop \in \N}$ in $\map D T$ converging to $x$. 
We show that: 

$\ds T' x = \lim_{n \mathop \to \infty} T_0 x_n$
We will then obtain the result from Convergent Sequence in Normed Vector Space has Unique Limit.
We have: 














\(\ds \norm {T' x - T_0 x_n}\)

\(=\)







\(\ds \norm {T' x - T' x_n}\)





$T$ extends $T_0$














\(\ds \)

\(\le\)







\(\ds C \norm {x - x_n}\)





for some real number $C > 0$, since $T'$ is bounded














\(\ds \)

\(\to\)







\(\ds 0\)





Sequence in Normed Vector Space Convergent to Limit iff Norm of Sequence minus Limit is Null Sequence



So, from Limits Preserve Inequalities, we have: 

$\norm {T' x - T_0 x_n} \to 0$
and so from Sequence in Normed Vector Space Convergent to Limit iff Norm of Sequence minus Limit is Null Sequence, we have: 

$\ds T_0 x_n \to T' x$
From the construction of $T$ we have:

$\ds T_0 x_n \to T' x$
From Convergent Sequence in Normed Vector Space has Unique Limit, we therefore have $T' x = T x$ for all $x \in \paren {\map D T}^-$.
So $T' = T$.
$\blacksquare$


Also see
Uniformly Continuous Function to Complete Metric Space has Unique Continuous Extension to Closure of Domain gives a more general result that is admissable here, but this special case is interesting enough to justify individual treatment.




