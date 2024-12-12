# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Ordering_on_Integers



Theorem
The following definitions of the concept of Ordering on Integers are equivalent:

Definition 1
The integers are ordered on the relation $\le$ as follows:

$\forall x, y \in \Z: x \le y$
if and only if:

$\exists c \in P: x + c = y$
where $P$ is the set of positive integers.

That is, $x$ is less than or equal to $y$ if and only if $y - x$ is non-negative.

Definition 2
The integers are ordered on the relation $\le$ as follows:
Let $x$ and $y$ be defined as from the formal definition of integers:

$x = \eqclass {x_1, x_2} {}$ and $y = \eqclass {y_1, y_2} {}$ where $x_1, x_2, y_1, y_2 \in \N$.

Then:

$x < y \iff x_1 + y_2 \le x_2 + y_1$
where:

$+$ denotes natural number addition
$\le$ denotes natural number ordering.


Proof
Let $x, y \in \Z$ such that $x \le y$.
Let $x$ and $y$ be defined as from the formal definition of integers:

$x = \eqclass {x_1, x_2} {}$ and $y = \eqclass {y_1, y_2} {}$ where $x_1, x_2, y_1, y_2 \in \N$.


$(1)$ implies $(2)$
Let $\le$ be an ordering on integers by definition $1$.
Then by definition:

$y - x$ is non-negative
That is:

$\map \PP {y - x}$
where $\PP$ is the positivity property.
Thus:

$\eqclass {y_1, y_2} {} - \eqclass {x_1, x_2} {}$ is non-negative
By definition of integer subtraction:

$\eqclass {y_1, y_2} {} + \eqclass {x_2, x_1} {}$ is non-negative
and by the formal definition of integers:

$\eqclass {y_1 + x_2, y_2 + x_1} {}$ is non-negative
We have that $y_1 + x_2$ and $y_2 + x_1$ are natural numbers.
Thus by definition of natural number ordering:

$y_1 + x_2 \ge y_2 + x_1$
Thus $\le$ is an ordering on integers by definition $2$.
$\Box$


$(2)$ implies $(1)$
Let $\le$ be an ordering on integers by definition $2$.
Then by definition:

$x_1 + y_2 \le x_2 + y_1$
That is:

$x_2 + y_1 \ge x_1 + y_2$
Hence by the formal definition of integers:

$\eqclass {y_1 + x_2, y_2 + x_1} {}$ is non-negative
By definition of integer addition:

$\eqclass {y_1, y_2} {} + \eqclass {x_2, x_1} {}$ is non-negative
By definition of integer subtraction:

$\eqclass {y_1, y_2} {} - \eqclass {x_1, x_2} {}$ is non-negative
That is:

$\map \PP {y - x}$
where $\PP$ is the positivity property.
Thus $\le$ is an ordering on integers by definition $1$.
$\blacksquare$





