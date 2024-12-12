# 

Source: https://proofwiki.org/wiki/Function_of_Two_Discrete_Random_Variables



Theorem
Let $\struct {\Omega, \Sigma, \Pr}$ be a probability space.
Let $X$ and $Y$ be discrete random variables on $\struct {\Omega, \Sigma, \Pr}$.
Let $g: \R^2 \to \R$ be a real-valued function.
Then $Z = \map g {X, Y}$, defined as:

$\forall \omega \in \Omega: \map Z \omega = \map g {\map X \omega, \map Y \omega}$
is also a discrete random variable.


Corollary
Let $\struct {\Omega, \Sigma, \Pr}$ be a probability space.
Let $X_1, X_2, \ldots, X_n$ be discrete random variables on $\struct {\Omega, \Sigma, \Pr}$.

Then $Z = \map g {X_1, X_2, \ldots, X_n}$, defined as:

$\forall \omega \in \Omega: \map Z \omega = \map g {\map {X_1} \omega, \map {X_2} \omega, \ldots, \map {X_n} \omega}$
is also a discrete random variable.


Proof
As $\Img X$ and $\Img Y$ are countable, then so is $\Img {\map g {X, Y} }$.

Now consider $\map {g^{-1} } Z$.
We have that:

$\forall x \in \R: \map {X^{-1} } x \in \Sigma$.
$\forall y \in \R: \map {Y^{-1} } x \in \Sigma$.
We also have that:

$\ds \forall z \in \R: \map {g^{-1} } z = \bigcup_{\tuple {x, y}: \map g {x, y} = z} \set {\tuple {x, y} }$
But $\Sigma$ is a sigma-algebra and therefore closed for unions.
Thus $\forall z \in \R: \map {g^{-1} } z \in \Sigma^2$.

Now consider $\tuple {v, w} \in \map {g^{-1} } Z$.
As $\Sigma$ is a sigma-algebra it follows directly that:

$\forall x \in v: \map {X^{-1} } x \in \Sigma$
$\forall y \in w: \map {Y^{-1} } y \in \Sigma$
Hence the result.
$\blacksquare$


Proof of Corollary
Follows straightforwardly by induction from the main result.
$\blacksquare$





