# 

Source: https://proofwiki.org/wiki/Condition_for_Independence_from_Product_of_Expectations/Corollary



Corollary to Condition for Independence from Product of Expectations
Let $\struct {\Omega, \Sigma, \Pr}$ be a probability space.
Let $X$ and $Y$ be independent discrete random variables on $\struct {\Omega, \Sigma, \Pr}$.
Then:

$\expect {X Y} = \expect X \expect Y$
assuming the latter expectations exist.


General Result
Let $X_1, X_2, \ldots, X_n$ be independent discrete random variables.
Then:

$\ds \expect {\prod_{k \mathop = 1}^n {X_k} } = \prod_{k \mathop = 1}^n \expect {X_k}$
assuming the latter expectations exist.


Proof
From Condition for Independence from Product of Expectations, setting both $g$ and $h$ to the identity functions:

$\forall x \in \R: \map g x = x$
$\forall y \in \R: \map h y = y$

It follows directly that if $X$ and $Y$ are independent, then:

$\expect {X Y} = \expect X \expect Y$
assuming the latter expectations exist.
$\blacksquare$


Note on Converse
Note that the converse of the corollary does not necessarily hold.
Let $X$ and $Y$ be discrete random variables on $\struct {\Omega, \Sigma, \Pr}$ such that:

$\expect {X Y} = \expect X \expect Y$

Then it is not necessarily the case that $X$ and $Y$ are independent.


Sources
1986: Geoffrey Grimmett and Dominic Welsh: Probability: An Introduction ... (previous) ... (next): $\S 3.3$: Independence of discrete random variables: Theorem $3 \text{C}$




