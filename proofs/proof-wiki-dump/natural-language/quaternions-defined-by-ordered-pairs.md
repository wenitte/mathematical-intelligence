# 

Source: https://proofwiki.org/wiki/Quaternions_Defined_by_Ordered_Pairs

Theorem
Consider the quaternions $\Bbb H$ as numbers in the form:

$a \mathbf 1 + b \mathbf i + c \mathbf j + d \mathbf k$
where:

$a, b, c, d$ are real numbers;
$\mathbf 1, \mathbf i, \mathbf j, \mathbf k$ are entities related to each other in the following way:













\(\ds \mathbf i \mathbf j = - \mathbf j \mathbf i\)

\(=\)







\(\ds \mathbf k\)




















\(\ds \mathbf j \mathbf k = - \mathbf k \mathbf j\)

\(=\)







\(\ds \mathbf i\)




















\(\ds \mathbf k \mathbf i = - \mathbf i \mathbf k\)

\(=\)







\(\ds \mathbf j\)




















\(\ds \mathbf i^2 = \mathbf j^2 = \mathbf k^2 = \mathbf i \mathbf j \mathbf k\)

\(=\)







\(\ds - \mathbf 1\)










Now consider the quaternions $\Bbb H$ defined as ordered pairs $\tuple {x, y}$ where $x, y \in \C$ are complex numbers, on which the operation of multiplication is defined as follows:

Let $w = a_1 + b_1 i, x = c_1 + d_1 i, y = a_2 + b_2 i, z = c_2 + d_2 i$ be complex numbers.
Then $\tuple {w, x} \tuple {y, z}$ is defined as:

$\tuple {w, x} \tuple {y, z} := \tuple {w y - z \overline x, \overline w z + x y}$
where $\overline w$ and $\overline x$ are the complex conjugates of $w$ and $x$ respectively.

These two definitions are equivalent.


Proof
First we identify the following:




\(\text {(1)}: \quad\)









\(\ds \mathbf 1\)

\(=\)







\(\ds \tuple {1, 0}\)










\(\text {(2)}: \quad\)









\(\ds \mathbf i\)

\(=\)







\(\ds \tuple {i, 0}\)










\(\text {(3)}: \quad\)









\(\ds \mathbf j\)

\(=\)







\(\ds \tuple {0, i}\)










\(\text {(4)}: \quad\)









\(\ds \mathbf k\)

\(=\)







\(\ds \tuple {0, 1}\)









We can see that:














\(\ds \mathbf 1^2\)

\(=\)







\(\ds \tuple {1, 0} \tuple {1, 0}\)




















\(\ds \)

\(=\)







\(\ds \tuple {1 \times 1 - 0 \times 0, 1 \times 0 + 0 \times 1}\)





from $\tuple {w, x} \tuple {y, z} := \tuple {w y - z \overline x, \overline w z + x y}$














\(\ds \)

\(=\)







\(\ds \tuple {1, 0}\)




















\(\ds \)

\(=\)







\(\ds \mathbf 1\)
























\(\ds \mathbf i^2\)

\(=\)







\(\ds \tuple {i, 0} \tuple {i, 0}\)




















\(\ds \)

\(=\)







\(\ds \tuple {i \times i - 0 \times 0, \paren {-i} \times 0 + 0 \times i}\)





from $\tuple {w, x} \tuple {y, z} := \tuple {w y - z \overline x, \overline w z + x y}$














\(\ds \)

\(=\)







\(\ds \tuple {-1, 0}\)




















\(\ds \)

\(=\)







\(\ds -\mathbf 1\)






















\(\ds \mathbf j^2\)

\(=\)







\(\ds \tuple {0, i} \tuple {0, i}\)




















\(\ds \)

\(=\)







\(\ds \tuple {0 \times 0 - i \times \paren {-i}, 0 \times i + i \times 0}\)





from $\tuple {w, x} \tuple {y, z} := \tuple {w y - z \overline x, \overline w z + x y}$














\(\ds \)

\(=\)







\(\ds \tuple {-1, 0}\)




















\(\ds \)

\(=\)







\(\ds -\mathbf 1\)






















\(\ds \mathbf k^2\)

\(=\)







\(\ds \tuple {0, 1} \tuple {0, 1}\)




















\(\ds \)

\(=\)







\(\ds \tuple {0 \times 0 - 1 \times 1, 0 \times 1 + 1 \times 0}\)





from $\tuple {w, x} \tuple {y, z} := \tuple {w y - z \overline x, \overline w z + x y}$














\(\ds \)

\(=\)







\(\ds \tuple {-1, 0}\)




















\(\ds \)

\(=\)







\(\ds -\mathbf 1\)






















\(\ds \mathbf i \mathbf j\)

\(=\)







\(\ds \tuple {i, 0} \tuple {0, i}\)




















\(\ds \)

\(=\)







\(\ds \tuple {i \times 0 - i \times 0, \paren {-i} \times i + 0 \times 0}\)





from $\tuple {w, x} \tuple {y, z} := \tuple {w y - z \overline x, \overline w z + x y}$














\(\ds \)

\(=\)







\(\ds \tuple {0, 1}\)




















\(\ds \)

\(=\)







\(\ds \mathbf k\)






















\(\ds \mathbf j \mathbf k\)

\(=\)







\(\ds \tuple {0, i} \tuple {0, 1}\)




















\(\ds \)

\(=\)







\(\ds \tuple {0 \times 0 - 1 \times \paren {-i}, 0 \times 1 + i \times 0}\)





from $\tuple {w, x} \tuple {y, z} := \tuple {w y - z \overline x, \overline w z + x y}$














\(\ds \)

\(=\)







\(\ds \tuple {i, 0}\)




















\(\ds \)

\(=\)







\(\ds \mathbf i\)






















\(\ds \mathbf k \mathbf i\)

\(=\)







\(\ds \tuple {0, 1} \tuple {i, 0}\)




















\(\ds \)

\(=\)







\(\ds \tuple {0 \times i - 0 \times 1, 0 \times 0 + 1 \times i}\)





from $\tuple {w, x} \tuple {y, z} := \tuple {w y - z \overline x, \overline w z + x y}$














\(\ds \)

\(=\)







\(\ds \tuple {0, i}\)




















\(\ds \)

\(=\)







\(\ds \mathbf j\)










Let:

$w = a_1 + b_1 i$
$x = d_1 + c_1 i$
$y = a_2 + b_2 i$
$z = d_2 + c_2 i$
and so:

$\overline w = a_1 - b_1 i$
$\overline x = d_1 - c_1 i$
Then substituting for $(1)$ to $(4)$ above, we have:














\(\ds w\)

\(=\)







\(\ds a_1 \mathbf 1 + b_1 \mathbf i\)




















\(\ds x\)

\(=\)







\(\ds d_1 \mathbf k + c_1 \mathbf j\)




















\(\ds y\)

\(=\)







\(\ds a_2 \mathbf 1 + b_2 \mathbf i\)




















\(\ds z\)

\(=\)







\(\ds d_2 \mathbf k + c_2 \mathbf j\)










Notice the way $\mathbf j$ and $\mathbf k$ are configured. See that they are what appears to be in the wrong order.

We can then demonstrate the equivalence by showing that:








\(\ds \tuple {w, x} \tuple {y, z} \ \ \)





\(\ds =\)

\(\)







\(\ds (\)




















\(\ds \)

\(\)







\(\ds \paren {a_1 a_2 - b_1 b_2 - c_1 c_2 - d_1 d_2} + \paren {a_1 b_2 + b_1 a_2 + c_1 d_2 - d_1 c_2} i\)




















\(\ds \)

\(,\)







\(\ds \paren {a_1 d_2 + b_1 c_2 - c_1 b_2 + d_1 a_2} + \paren {a_1 c_2 - b_1 d_2 + c_1 a_2 + d_1 b_2} i\)




















\(\ds \)

\(\)







\(\ds )\)









which is equivalent to:








\(\ds \mathbf x_1 \mathbf x_2 \ \ \)





\(\ds =\)

\(\)







\(\ds \paren {a_1 a_2 - b_1 b_2 - c_1 c_2 - d_1 d_2} \mathbf 1\)




















\(\ds \)

\(+\)







\(\ds \paren {a_1 b_2 + b_1 a_2 + c_1 d_2 - d_1 c_2} \mathbf i\)




















\(\ds \)

\(+\)







\(\ds \paren {a_1 c_2 - b_1 d_2 + c_1 a_2 + d_1 b_2} \mathbf j\)




















\(\ds \)

\(+\)







\(\ds \paren {a_1 d_2 + b_1 c_2 - c_1 b_2 + d_1 a_2} \mathbf k\)









where:

$x_1 = a_1 \mathbf 1 + b_1 \mathbf i + c_1 \mathbf j + d_1 \mathbf k$
$x_2 = a_2 \mathbf 1 + b_2 \mathbf i + c_2 \mathbf j + d_2 \mathbf k$
in accordance with Quaternion Multiplication.

Thus:














\(\ds w y\)

\(=\)







\(\ds \paren {a_1 a_2 - b_1 b_2} + \paren {a_1 b_2 + b_1 a_2} i\)




















\(\ds z \overline x\)

\(=\)







\(\ds \paren {d_1 d_2 + c_1 c_2} + \paren {d_1 c_2 - c_1 d_2} i\)




















\(\ds \overline w z\)

\(=\)







\(\ds \paren {a_1 d_2 + b_1 c_2} + \paren {a_1 c_2 - b_1 d_2} i\)




















\(\ds x y\)

\(=\)







\(\ds \paren {d_1 a_2 - c_1 b_2} + \paren {d_1 b_2 + c_1 a_2} i\)









So:














\(\ds w y - z \overline x\)

\(=\)







\(\ds \paren {a_1 a_2 - b_1 b_2 - c_1 c_2 - d_1 d_2} + \paren {a_1 b_2 + b_1 a_2 + c_1 d_2 - d_1 c_2} i\)




















\(\ds \overline w z + x y\)

\(=\)







\(\ds \paren {a_1 d_2 + b_1 c_2 - c_1 b_2 + d_1 a_2} + \paren {a_1 c_2 - b_1 d_2 + c_1 a_2 + d_1 b_2} i\)









as required.
$\blacksquare$


Sources
2002: John C. Baez: The Octonions: 2.2 The Cayley-Dickson Construction




