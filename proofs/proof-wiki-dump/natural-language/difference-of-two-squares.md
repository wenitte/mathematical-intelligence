# 

Source: https://proofwiki.org/wiki/Difference_of_Two_Squares



Theorem
Let $\struct {R, +, \circ}$ be a commutative ring whose zero is $0_R$.
Let $x, y \in R$.

Then:

$x \circ x + \paren {- \paren {y \circ y} } = \paren {x + y} \circ \paren {x + \paren {-y} }$

When $R$ is one of the standard sets of numbers, that is $\Z, \Q, \R$, and so on, then this translates into:

$x^2 - y^2 = \paren {x + y} \paren {x - y}$


Algebraic Proof 1













\(\ds \paren {x + y} \circ \paren {x + \paren {-y} }\)

\(=\)







\(\ds x \circ x + y \circ x + x \circ \paren {-y} + y \circ \paren {-y}\)





Distributivity of $\circ$ over $+$ in a ring














\(\ds \)

\(=\)







\(\ds x \circ x + x \circ y + x \circ \paren {-y} + y \circ \paren {-y}\)





$R$ is a commutative ring














\(\ds \)

\(=\)







\(\ds x \circ x + x \circ \paren {y + \paren {-y} } + \paren {-\paren {y \circ y} }\)





various ring properties














\(\ds \)

\(=\)







\(\ds x \circ x + x \circ 0_R + \paren {-\paren {y \circ y} }\)




















\(\ds \)

\(=\)







\(\ds x \circ x + \paren {-\paren {y \circ y} }\)









$\blacksquare$


Algebraic Proof 2
This is a special case of Difference of Two Powers:

$\ds a^n - b^n = \paren {a - b} \paren {a^{n - 1} + a^{n - 2} b + a^{n - 3} b^2 + \cdots + a b^{n - 2} + b^{n - 1} } = \paren {a - b} \sum_{j \mathop = 0}^{n - 1} a^{n - j - 1} b^j$
The result follows by setting $n = 2$.
$\blacksquare$


Geometric Proof 1
In the words of Euclid:

If a straight line be cut into equal and unequal segments, the rectangle contained by the unequal segments of the whole together with the square on the straight line between the points of section is equal to the square on the half.
(The Elements: Book $\text{II}$: Proposition $5$)



Let $AB$ be cut into equal segments at $C$ and unequal segments at $D$.
Then the rectangle contained by $AD$ and $DB$ together with the square on $CD$ equals the square on $BC$.
(That is, let $x = AC, y = CD$. Then $\paren {x + y} \paren {x - y} + y^2 = x^2$.)

This is proved as follows.

Construct the square $CBFE$ on $CB$, and join $BE$.
Construct $DG$ parallel to $CE$ through $G$, and let $DG$ cross $BE$ at $H$.
Construct $KM$ parallel to $AB$ through $H$.
Construct $AK$ parallel to $BF$ through $A$.
From Complements of Parallelograms are Equal:

$\Box CDHL = \Box FGHM$.
Add the square $DBMH$ to each.
Then $\Box CBML = \Box DBFG$.
But as $AC = CB$, from Parallelograms with Equal Base and Same Height have Equal Area we have that:

$\Box ACLK = \Box CBML$
Add $\Box CDHL$ to each.
Then $\Box ADHK$ is equal in area to the gnomon $CBFGHL$.
But $\Box ADHK$ is the rectangle contained by $AD$ and $DB$, because $DB = DH$.
So the gnomon $CBFGHL$ is equal in area to the rectangle contained by $AD$ and $DB$.
Now $\Box LHGE$ is equal to the square on $CD$.
Add $\Box LHGE$ to each of the gnomon $CBFGHL$ and $\Box ADHK$.
Then the gnomon $CBFGHL$ together with $\Box LHGE$ equals the rectangle contained by $AD$ and $DB$ and the square on $CD$.
But the gnomon $CBFGHL$ together with $\Box LHGE$ is the square $CBFE$.
Hence the result.
$\blacksquare$


Geometric Proof 2

Let $\Box ABCD$ be a square of side length $x$.
Let $\Box DEFG$ be a square of side length $y$ where $y < x$
Let $EF$ be produced to $H$.

The area of $\Box ABCD$ is seen to be equal to the sum of:

the area of the rectangle $AEHB$
the area of the rectangle $FGCH$
the area of the square $DEFG$

From Area of Square:

the area of $\Box ABCD$ is equal to $x^2$
the area of $\Box DEFG$ is equal to $y^2$

From Area of Rectangle:

the area of $AEHB$ is equal to $x \paren {x - y}$
the area of $FGCH$ is equal to $y \paren {x - y}$

Hence:














\(\ds x^2 - y^2\)

\(=\)







\(\ds x \paren {x - y} + y \paren {x - y}\)




















\(\ds \)

\(=\)







\(\ds \paren {x + y} \paren {x - y}\)





Real Multiplication Distributes over Addition



$\blacksquare$


Sources
1959: A.H. Basson and D.J. O'Connor: Introduction to Symbolic Logic (3rd ed.) ... (previous) ... (next): Chapter $\text I$ Introductory: $2$. The Use of Symbols
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 2$: Special Products and Factors: $2.11$
2014: Christopher Clapham and James Nicholson: The Concise Oxford Dictionary of Mathematics (5th ed.) ... (previous) ... (next): difference of two squares




