# 

Source: https://proofwiki.org/wiki/Elements_of_Primitive_Pythagorean_Triples_Modulo_4

Theorem
Let $x \in \Z: x > 2$.

Then $x$ is an element of some primitive Pythagorean triple if and only if $x \not \equiv 2 \pmod 4$.


Corollary
In every Pythagorean triple, at least one element is a multiple of $4$.


Proof
Let $m = k + 1, n = k$ where $k \in \Z: k \ge 1$.
From Consecutive Integers are Coprime, $m \perp n$.
Then we have:

$m, n \in \Z$ are positive integers
$m \perp n$, that is, $m$ and $n$ are coprime
$m$ and $n$ are of opposite parity
$m > n$.
From Solutions of Pythagorean Equation, these conditions are necessary and sufficient for $\tuple {2 m n, m^2 - n^2, m^2 + n^2}$ to be a primitive Pythagorean triple.
Substituting for $m$ and $n$, we get:

$\tuple {2 k^2 + 2 k, 2 k + 1, 2 k^2 + 2 k + 1}$ is a primitive Pythagorean triple.
So we see that for all $k \ge 1$, $2 k + 1$ is an element of a primitive Pythagorean triple.
So every odd integer from $3$ upwards is an element of some primitive Pythagorean triple.
That is, any integer $x$ such that $x \equiv 1$ or $x \equiv 3 \pmod 4$.

Now, consider $m = 2 k, n = 1$ where $k \in \Z: k \ge 1$.
These also fit the criteria for $\tuple {2 m n, m^2 - n^2, m^2 + n^2}$ to be a primitive Pythagorean triple.
Substituting for $m$ and $n$, we get:

$\tuple {4 k, 4 k^2 - 1, 4 k^2 + 1}$ is a primitive Pythagorean triple.
This means that for all $k \ge 1$, $4 k$ is an element of a primitive Pythagorean triple.
So every multiple of $4$ is an element of some primitive Pythagorean triple.
That is, any integer $x$ such that $x \equiv 0 \pmod 4$.

Now, consider the general primitive Pythagorean triple $\tuple {2 m n, m^2 - n^2, m^2 + n^2}$.
As $m$ and $n$ are of opposite parity, they can be expressed as $2 r$ and $2 s + 1$.
So:

$2 m n = 2 \paren {2 r} \paren {2 s + 1} = 4 r \paren {2 s + 1}$
So $2 m n$ is divisible by $4$.
As the only even elements of a primitive Pythagorean triple are of this form $2 m n$ from Parity of Smaller Elements of Primitive Pythagorean Triple, there can be no such elements $x$ of the form $x = 2 \pmod 4$.
Hence the result.
$\blacksquare$





