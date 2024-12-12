# 

Source: https://proofwiki.org/wiki/Categories_of_Elements_under_Well-Ordering

Theorem
Let $A$ be a class.
Let $\preccurlyeq$ be a well-ordering on $A$.
Let $x \in A$ be an element of $A$.
Then $x$ falls into one of the following $3$ categories:

$(1): \quad x$ is the smallest element of $A$ with respect to $\preccurlyeq$
$(2): \quad x$ is the immediate successor of another element $y \in A$ with respect to $\preccurlyeq$
$(3): \quad x$ is a limit element of $A$ under $\preccurlyeq$.


Proof
Let $x \in A$.


$(1)
\quad x$ is the smallest element of $A$ with respect to $\preccurlyeq$:
We note that $\preccurlyeq$ is a well-ordering on $A$.
Hence as $A \subseteq A$ we have that $A$ has a smallest element.
Hence there exists one element of $A$ which is that smallest element of $A$.
Let $x$ be that smallest element of $A$.
By definition of smallest element:

$\forall y \in A: x \preccurlyeq y$
Hence $x$ cannot be the immediate successor of another element $y \in A$ with respect to $\preccurlyeq$.


$(2)
\quad x$ is the immediate successor of another element $y \in A$ with respect to $\preccurlyeq$:
Let $y \in A$ such that $y$ is not the greatest element of $A$ with respect to $\preccurlyeq$.
Then:

$\forall y \in A: \exists x \in A: y \preccurlyeq x$
such that $x$ is an immediate successor of $y$.
By definition of immediate successor, it follows that $x$ is not the smallest element of $A$ with respect to $\preccurlyeq$.


$(3)
\quad x$ is a limit element of $A$ under $\preccurlyeq$:
Suppose there exists $x$ such that:

$x$ is not the smallest element of $A$ with respect to $\preccurlyeq$
and:

$x$ is not the immediate successor of another element $y \in A$ with respect to $\preccurlyeq$.
Then by definition $x$ is a limit element of $A$ under $\preccurlyeq$.
The result follows.
$\blacksquare$


Sources
2010: Raymond M. Smullyan and Melvin Fitting: Set Theory and the Continuum Problem (revised ed.) ... (previous) ... (next): Chapter $4$: Superinduction, Well Ordering and Choice: Part $\text I$ -- Superinduction and Well Ordering: $\S 1$ Introduction to well ordering




