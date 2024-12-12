# 

Source: https://proofwiki.org/wiki/Area_of_Integer_Heronian_Triangle_is_Multiple_of_6



Theorem
Let $\triangle {ABC}$ be an integer Heronian triangle.
Then the area of $\triangle {ABC}$ is a multiple of $6$.


Proof
Heron's Formula gives us that:

$\AA = \sqrt {s \paren {s - a} \paren {s - b} \paren {s - c} }$
where:

$\AA$ denotes the area of the triangle
$a$, $b$ and $c$ denote the lengths of the sides of the triangle
$s = \dfrac {a + b + c} 2$ denotes the semiperimeter of the triangle.
We set out to eliminate $s$ and simplify as best possible:














\(\ds \AA\)

\(=\)







\(\ds \sqrt {s \paren {s - a} \paren {s - b} \paren {s - c} }\)




















\(\ds \AA^2\)

\(=\)







\(\ds \dfrac {a + b + c} 2 \paren {\dfrac {a + b + c} 2 - a} \paren {\dfrac {a + b + c} 2 - b} \paren {\dfrac {a + b + c} 2 - c}\)





substituting for $s$ and squaring








\(\ds \leadsto \ \ \)





\(\ds 16 \AA^2\)

\(=\)







\(\ds \paren {a + b + c} \paren {-a + b + c} \paren {a - b + c} \paren {a + b - c}\)





multiplying through by $16$ and simplifying














\(\ds \)

\(=\)







\(\ds 2 a^2 b^2 + 2 b^2 c^2 + 2 c^2 a^2 - a^4 - b^4 - c^4\)





multiplying out and simplifying








\(\ds \leadsto \ \ \)





\(\ds \paren {4 \AA}^2 + \paren {b^2 + c^2 - a^2}^2\)

\(=\)







\(\ds \paren {2 b c}^2\)





factorising



This is now in the form $p^2 + q^2 = r^2$.
From Solutions of Pythagorean Equation, $\tuple {p, q, r}$ has the parametric solution:

$\tuple {m^2 - n^2, 2 m n, m^2 + n^2}$

There are two steps to showing $6 \divides \AA$:


Step $1$: $2 \divides \AA$
By Euclid's Lemma for Prime Divisors, we just need to show:

$2 \divides \AA^2 = s \paren {s - a} \paren {s - b} \paren {s - b}$
By Semiperimeter of Integer Heronian Triangle is Composite, $s \in \N$.
There are $3$ cases:


Case $1$: There are sides with odd and even lengths
Under this condition, one of $s - x$ will be even.
Then $\AA^2$ is also even.
$\Box$


Case $2$: All sides are of odd length
Suppose all sides are of odd length.
Then the perimeter is also odd.
But then the semiperimeter cannot be an integer.
This is a contradiction.
$\Box$


Case $3$: All sides are of even length
Suppose all sides are of even length.
If the semiperimeter is even, the result follows.

Therefore we consider the case where $s$ is odd.
Then $x := s - a$, $y := s - b$ and $z := s - c$ are also odd.
Note that $x + y + z = 3 s - a - b - c = s$.
Hence $\AA^2 = x y z \paren {x + y + z}$.

Note that each of $x, y, z$ must be equivalent to $\pm 1 \pmod 4$.
If all of $x, y, z \equiv 1 \pmod 4$:

$x + y + z \equiv -1 \pmod 4$
If two of $x, y, z \equiv 1 \pmod 4$:

$x + y + z \equiv 1 \pmod 4$
If one of $x, y, z \equiv 1 \pmod 4$:

$x + y + z \equiv -1 \pmod 4$
If none of $x, y, z \equiv 1 \pmod 4$:

$x + y + z \equiv 1 \pmod 4$
In any of the above cases, we have:

$\AA^2 \equiv -1 \pmod 4$
which is impossible by Square Modulo 4.
This is a contradiction.
$\Box$

In each valid case, we see that $2 \divides \AA^2$.
$\Box$


Step $2$: $3 \divides \AA$
By Euclid's Lemma for Prime Divisors, we just need to show:

$3 \divides 16 \AA^2 = \paren {a + b + c} \paren {-a + b + c} \paren {a - b + c} \paren {a + b - c}$
We split the problem into $4$ cases:


Case $1$: None of $a, b, c$ are divisible by $3$
If $a \equiv b \equiv c \pmod 3$:

$a + b + c \equiv 3 a \equiv 0 \pmod 3$
Hence:

$3 \divides \paren {a + b + c}$

If two of the lengths have the same remainder when divided by $3$, say $a \equiv b \not \equiv c \pmod 3$:

$a \equiv b \equiv -c \pmod 3$
Hence:

$a + b - c \equiv 3 a \equiv 0 \pmod 3$
Thus:

$3 \divides \paren {a + b - c}$
$\Box$


Case $2$: One of $a, b, c$ is divisible by $3$
Without loss of generality suppose that number is $a$.
If $b \equiv c \pmod 3$:

$a + b - c \equiv a \equiv 0 \pmod 3$
Hence

$3 \divides \paren {a + b - c}$

If $b \not \equiv c \pmod 3$:

$b \equiv -c \pmod 3$
Hence:

$a + b + c \equiv -c + c \equiv 0 \pmod 3$
Thus:

$3 \divides \paren {a + b + c}$
$\Box$


Case $3$: Two of $a, b, c$ is divisible by $3$
Without loss of generality, suppose $3 \divides a, b$.
Then:














\(\ds 16 \AA^2\)

\(=\)







\(\ds \paren {a + b + c} \paren {-a + b + c} \paren {a - b + c} \paren {a + b - c}\)




















\(\ds \)

\(\equiv\)







\(\ds c \cdot c \cdot c \cdot \paren {-c}\)

\(\ds \pmod 3\)


















\(\ds \)

\(\equiv\)







\(\ds -c^4\)

\(\ds \pmod 3\)


















\(\ds \)

\(\equiv\)







\(\ds -1\)

\(\ds \pmod 3\)



Square Modulo 3



By Square Modulo 3, $16 \AA^2 = \paren {4 \AA}^2$ is not a square.
This is a contradiction.
Therefore this case is not valid.
$\Box$


Case $4$:  $a, b, c$ are all divisible by $3$
We have:

$3 \divides \paren {a + b + c}$
$\Box$

We see that in every valid case, $3 \divides 16 \AA^2$.
Hence $3 \divides \AA$, and thus $6 \divides \AA$.
$\blacksquare$


Sources
1992: David Wells: Curious and Interesting Puzzles ... (previous) ... (next): Bachet: $111$




