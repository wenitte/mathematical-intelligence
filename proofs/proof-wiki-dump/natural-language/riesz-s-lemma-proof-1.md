# 

Source: https://proofwiki.org/wiki/Riesz%27s_Lemma/Proof_1

Theorem
Let $X$ be a normed vector space.
Let $Y$ be a proper closed linear subspace of $X$. 
Let $\alpha \in \openint 0 1$.

Then there exists $x_\alpha \in X$ such that: 

$\norm {x_\alpha} = 1$
with:

$\norm {x_\alpha - y} > \alpha$
for all $y \in Y$.


Proof
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





