# 

Source: https://proofwiki.org/wiki/Integral_of_Integrable_Function_is_Additive/Corollary_1

Corollary
Let $\struct {X, \Sigma, \mu}$ be a measure space.
Let $f, g: X \to \overline \R$ be $\mu$-integrable functions.
Suppose that the pointwise sum $f + g$ is well-defined.

Then $f + g$ is $\mu$-integrable, with:

$\ds \int \paren {f + g} \rd \mu = \int f \rd \mu + \int g \rd \mu$


Proof
Define: 

$A = \set {x \in X : \map f x \in \R}$
and:

$B = \set {x \in X : \map g x \in \R}$
From Set of Points for which Measurable Function is Real-Valued is Measurable, we have that: 

$A$ and $B$ are $\Sigma$-measurable.
From $\sigma$-Algebra Closed under Countable Intersection, we have that: 

$A \cap B$ is $\Sigma$-measurable.
From Integral of Integrable Function over Measurable Set is Well-Defined, we have that: 

$f \cdot \chi_{A \cap B}$ and $g \cdot \chi_{A \cap B}$ are $\mu$-integrable.
Since whenever $x \in X$ is such that $\size {\map f x} = +\infty$ or $\size {\map g x} = +\infty$, we have $\map {\chi_{A \cap B} } x = 0$, these are both functions $X \to \R$. 
So, we can apply Integral of Integrable Function is Additive to obtain: 

$f \cdot \chi_{A \cap B} + g \cdot \chi_{A \cap B}$ is $\mu$-integrable.
and

$\ds \int \paren {f \cdot \chi_{A \cap B} + g \cdot \chi_{A \cap B} } \rd \mu = \int f \cdot \chi_{A \cap B} \rd \mu + \int g \cdot \chi_{A \cap B} \rd \mu$
Rewrite: 

$f \cdot \chi_{A \cap B} + g \cdot \chi_{A \cap B} = \paren {f + g} \cdot \chi_{A \cap B}$
From Integrable Function is A.E. Real-Valued, we have that: 

$X \setminus A$ and $X \setminus B$ are $\mu$-null sets.
Then by Null Sets Closed under Countable Union, we have that: 

$\paren {X \setminus A} \cup \paren {X \setminus B}$ is $\mu$-null.
So, from Complement of Intersection, we have: 

$X \setminus \paren {A \cap B}$ is $\mu$-null.
So if $x \in X$ has: 

$\map {\paren {f + g} } x \map {\chi_{A \cap B} } x \ne \map {\paren {f + g} } x$
we have: 

$\map {\chi_{A \cap B} } x = 0$
and:

$x \in X \setminus \paren {A \cap B}$, which is $\mu$-null.
So: 

$\paren {f + g} \cdot \chi_{A \cap B} = f + g$ $\mu$-almost everywhere.
So from A.E. Equal Positive Measurable Functions have Equal Integrals: Corollary 1, we have that: 

$f + g$ is $\mu$-integrable
and:

$\ds \int \paren {f + g} \cdot \chi_{A \cap B} \rd \mu = \int \paren {f + g} \rd \mu$
Similarly we have: 

$f \cdot \chi_{A \cap B} = f$ $\mu$-almost everywhere.
So from A.E. Equal Positive Measurable Functions have Equal Integrals: Corollary 1, we have: 

$\ds \int f \cdot \chi_{A \cap B} \rd \mu = \int f \rd \mu$
Since we also have:

$g \cdot \chi_{A \cap B} = g$ $\mu$-almost everywhere
we also get: 

$\ds \int g \cdot \chi_{A \cap B} \rd \mu = \int g \rd \mu$
Putting it all together we get: 

$\ds \int \paren {f + g} \rd \mu = \int f \rd \mu + \int g \rd \mu$
$\blacksquare$





