# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Strict_Ordering_on_Integers



Theorem
The following definitions of the concept of Strict Ordering on Integers are equivalent:

Definition 1
The integers are strictly ordered on the relation $<$ as follows:

$\forall x, y \in \Z: x < y \iff y - x \in \Z_{>0}$
That is, $x$ is less than $y$ if and only if $y - x$ is (strictly) positive.

Definition 2
The integers are strictly ordered on the relation $<$ as follows:
Let $x$ and $y$ be defined as from the formal definition of integers:

$x = \eqclass {x_1, x_2} {}$ and $y = \eqclass {y_1, y_2} {}$ where $x_1, x_2, y_1, y_2 \in \N$.

Then:

$x < y \iff x_1 + y_2 < x_2 + y_1$
where:

$+$ denotes natural number addition
$a < b$ denotes natural number ordering $a \le b$ such that $a \ne b$.


Proof
Let $x, y \in \Z$ such that $x < y$.
Let $x$ and $y$ be defined as from the formal definition of integers:

$x = \eqclass {x_1, x_2} {}$ and $y = \eqclass {y_1, y_2} {}$ where $x_1, x_2, y_1, y_2 \in \N$.


$(1)$ implies $(2)$
Let $<$ be a strict ordering on integers by definition $1$.
Then by definition:

$y - x$ is non-negative
That is:

$\map \PP {y - x}$
where $\PP$ is the strict positivity property.
Thus:

$\eqclass {y_1, y_2} {} - \eqclass {x_1, x_2} {}$ is strictly positive
By definition of integer subtraction:

$\eqclass {y_1, y_2} {} + \eqclass {x_2, x_1} {}$ is strictly positive
and by the formal definition of integers:

$\eqclass {y_1 + x_2, y_2 + x_1} {}$ is strictly positive
We have that $y_1 + x_2$ and $y_2 + x_1$ are natural numbers.
Thus by definition of natural number ordering:

$y_1 + x_2 > y_2 + x_1$
Thus $<$ is a strict ordering on integers by definition $2$.
$\Box$


$(2)$ implies $(1)$
Let $<$ be a strict ordering on integers by definition $2$.
Then by definition:

$x_1 + y_2 < x_2 + y_1$
That is:

$x_2 + y_1 > x_1 + y_2$
Hence by the formal definition of integers:

$\eqclass {y_1 + x_2, y_2 + x_1} {}$ is strictly positive
By definition of integer addition:

$\eqclass {y_1, y_2} {} + \eqclass {x_2, x_1} {}$ is strictly positive
By definition of integer subtraction:

$\eqclass {y_1, y_2} {} - \eqclass {x_1, x_2} {}$ is strictly positive
That is:

$\map \PP {y - x}$
where $\PP$ is the strict positivity property.
Thus $\le$ is a strict ordering on integers by definition $1$.
$\blacksquare$





