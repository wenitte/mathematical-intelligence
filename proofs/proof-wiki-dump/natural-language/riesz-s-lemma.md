# 

Source: https://proofwiki.org/wiki/Riesz%27s_Lemma



Theorem
Let $X$ be a normed vector space.
Let $Y$ be a proper closed linear subspace of $X$. 
Let $\alpha \in \openint 0 1$.

Then there exists $x_\alpha \in X$ such that: 

$\norm {x_\alpha} = 1$
with:

$\norm {x_\alpha - y} > \alpha$
for all $y \in Y$.


Proof 1
Since $Y < X$:

$X \setminus Y$ is non-empty.
Since $Y$ is closed:

$X \setminus Y$ is open.
Let $x \in X \setminus Y$.
Then there exists $\epsilon > 0$ such that: 

$\map {B_\epsilon} x \subset X \setminus Y$
So, for all $y \in Y$, we must have: 

$\norm {x - y} \ge \epsilon$
That is: 

$\inf \set {\norm {x - y} \colon y \in Y} \ge \epsilon$
For brevity, let:

$d = \inf \set {\norm {x - y} \colon y \in Y}$
Since $\alpha^{-1} > 1$, there exists $z \in Y$ with: 

$\norm {x - z} < d \alpha^{-1}$
otherwise the infimum would be at least $d \alpha^{-1} > d$, a contradiction.
Since $x \in X \setminus Y$ and $z \in Y$, we clearly have $x \ne z$.
So, we can set: 

$ x_\alpha = \dfrac {x - z} {\norm {x - z} }$
Clearly:

$\norm {x_\alpha} = \dfrac {\norm {x - z} } {\norm {x - z} } = 1$
Now, for any $y \in Y$ we have: 














\(\ds \norm {x_\alpha - y}\)

\(=\)







\(\ds \norm {\frac {x - z} {\norm {x - z} } - y}\)




















\(\ds \)

\(=\)







\(\ds \frac {\norm {x - \paren {z + \norm {x - z} y} } } {\norm {x - z} }\)









We've already seen that: 

$\norm {x - z} < d \alpha^{-1}$
Since $Y$ is closed under linear combination, we have:

$z + \norm {x - z} y \in Y$
and so: 

$\norm {x - \paren {z + \norm {x - z} y} } \ge d$
We conclude that: 














\(\ds \norm {x_\alpha - y}\)

\(=\)







\(\ds \frac {\norm {x - \paren {z + \norm {x - z} y} } } {\norm {x - z} }\)




















\(\ds \)

\(>\)







\(\ds \frac d {d \alpha^{-1} }\)




















\(\ds \)

\(=\)







\(\ds \alpha\)









$\blacksquare$


Proof 2
Consider the normed quotient vector space $X / Y$ with quotient mapping $\pi$.
From Operator Norm of Quotient Mapping in Quotient Normed Vector Space is 1, we have: 

$\norm \pi_{\map B {X, X/Y} } = 1$
Since $\alpha \in \openint 0 1$, there exists $x_\alpha \in X$ with $\norm {x_\alpha} = 1$ and: 

$\norm {\map \pi {x_\alpha} }_{X/Y} > \alpha$
by the definition of the norm on the space of bounded linear transformations.
That is, by the definition of the quotient norm:

$\ds \inf_{z \mathop \in Y} \norm {x_\alpha - z} > \alpha$
So there exists $y \in Y$ such that: 

$\norm {x_\alpha - y} > \alpha$
$\blacksquare$


Source of Name
This entry was named for Frigyes Riesz.





