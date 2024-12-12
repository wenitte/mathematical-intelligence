# 

Source: https://proofwiki.org/wiki/Condition_for_Independence_from_Product_of_Expectations



Theorem
Let $\struct {\Omega, \Sigma, \Pr}$ be a probability space.
Let $X$ and $Y$ be discrete random variables on $\struct {\Omega, \Sigma, \Pr}$.
Let $\expect X$ denote the expectation of $X$.

Then $X$ and $Y$ are independent if and only if:

$\expect {\map g x \map h y} = \expect {\map g x} \expect {\map h y}$
for all functions $g, h: \R \to \R$ for which the latter two expectations exist.


Corollary
Let $X$ and $Y$ be independent discrete random variables on $\struct {\Omega, \Sigma, \Pr}$.
Then:

$\expect {X Y} = \expect X \expect Y$
assuming the latter expectations exist.


Proof
Sufficient Condition
Suppose that $X$ and $Y$ were not independent.
That is:

$\map \Pr {X = a, Y = b} \ne \map \Pr {X = a} \map \Pr {Y = b}$
for some $a, b \in \R$.

Now, suppose that

$\expect {\map g x \map h y} = \expect {\map g x} \expect {\map h y}$
for all functions $g, h: \R \to \R$ for which the latter two expectations exist.

Let us define $g$ and $h$ as examples of such functions as follows:

$(1): \quad \map g x := \begin{cases}
1 & : x = a \\
0 & : x \ne a
\end{cases}$

$(2): \quad \map h y := \begin{cases}
1 & : y = b \\
0 & : y \ne b
\end{cases}$
where $a \in \R$ and $b \in \R$ are arbitrary real numbers.
Then:














\(\ds \expect {\map g x \map h y}\)

\(=\)







\(\ds \map \Pr {X = a, Y = b}\)




















\(\ds \expect {\map g X} \expect {\map h Y}\)

\(=\)







\(\ds \map \Pr {X = a} \map \Pr {Y = b}\)










So by hypothesis:

$\map \Pr {X = a, Y = b} = \map \Pr {X = a} \map \Pr {Y = b}$
But also by hypothesis:

$\map \Pr {X = a, Y = b} \ne \map \Pr {X = a} \map \Pr {Y = b}$
This contradicts our supposition that:

$\expect {\map g x \map h y} = \expect {\map g x} \expect {\map h y}$
for all functions $g, h: \R \to \R$ for which the latter two expectations exist.
So, if the above supposition holds, then $X$ and $Y$ have to be independent.
$\Box$


Necessary Condition
Suppose $X$ and $Y$ are independent.
Let $g, h: \R \to \R$ be any real functions such that $\expect {\map g x}$ and $\expect {\map h y}$ exist.

Then:














\(\ds \expect {\map g x \map h y}\)

\(=\)







\(\ds \sum_{x, y} \map g x \map h y \map \Pr {X = x, Y = y}\)




















\(\ds \)

\(=\)







\(\ds \sum_{x, y} \map g x \map h y \map \Pr {X = x} \map \Pr {Y = y}\)





Definition of Independent Random Variables














\(\ds \)

\(=\)







\(\ds \sum_x \map g x \map \Pr {X = x} \sum_y \map h y \map \Pr {Y = y}\)




















\(\ds \)

\(=\)







\(\ds \expect {\map g x} \expect {\map h y}\)









thus proving that

$\expect {\map g x \map h y} = \expect {\map g x} \expect {\map h y}$
whatever $g$ and $h$ are.
$\blacksquare$


Sources
1986: Geoffrey Grimmett and Dominic Welsh: Probability: An Introduction ... (previous) ... (next): $\S 3.3$: Independence of discrete random variables: Theorem $3 \text{D}$




