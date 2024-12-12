# 

Source: https://proofwiki.org/wiki/Brahmagupta-Fibonacci_Identity

  This article was Featured Proof between 4th July 2014 and 17th November 2014.




Theorem
Let $a, b, c, d$ be numbers.
Then:

$\paren {a^2 + b^2} \paren {c^2 + d^2} = \paren {a c + b d}^2 + \paren {a d - b c}^2$


Corollary
$\paren {a^2 + b^2} \paren {c^2 + d^2} = \paren {a c - b d}^2 + \paren {a d + b c}^2$


General result
Let $a, b, c, d, n$ be numbers.

$\paren {a^2 + n b^2} \paren {c^2 + n d^2} = \paren {a c + n b d}^2 + n \paren {a d - b c}^2$


Extension
Let $a_1, a_2, \ldots, a_n, b_1, b_2, \ldots, b_n$ be integers.
Then:

$\ds \prod_{j \mathop = 1}^n \paren { {a_j}^2 + {b_j}^2} = c^2 + d^2$
where $c, d \in \Z$.
That is: the product of any number of sums of two squares is also a sum of two squares.


Proof 1













\(\ds \)

\(\)







\(\ds \paren {a c + b d}^2 + \paren {a d - b c}^2\)




















\(\ds \)

\(=\)







\(\ds \paren {\paren {a c}^2 + 2 \paren {a c} \paren {b d} + \paren {b d}^2} + \paren {\paren {a d}^2 - 2 \paren {a d} \paren {b c} + \paren {b c}^2}\)





Square of Sum, Square of Difference














\(\ds \)

\(=\)







\(\ds a^2 c^2 + 2 a b c d + b^2 d^2 + a^2 d^2 - 2 a b c d + b^2 c^2\)





multiplying out














\(\ds \)

\(=\)







\(\ds a^2 c^2 + a^2 d^2 + b^2 c^2 + b^2 d^2\)





simplifying














\(\ds \)

\(=\)







\(\ds \paren {a^2 + b^2} \paren {c^2 + d^2}\)









$\blacksquare$


Proof 2
From the more general version of Brahmagupta-Fibonacci Identity:

$\paren {a^2 + n b^2} \paren {c^2 + n d^2} = \paren {a c + n b d}^2 + n \paren {a d - b c}^2$
The result follows by setting $n = 1$.
$\blacksquare$


Proof 3
Lagrange's Identity gives:

$\ds \paren {\sum_{k \mathop = 1}^n {a_k}^2} \paren {\sum_{k \mathop = 1}^n {b_k}^2} - \paren {\sum_{k \mathop = 1}^n a_k b_k}^2 = \sum_{i \mathop = 1}^{n - 1} \sum_{j \mathop = i + 1}^n \paren {a_i b_j - a_j b_i}^2$

Setting $n = 2$:














\(\ds \paren {\sum_{k \mathop = 1}^2 {a_k}^2} \paren {\sum_{k \mathop = 1}^2 {b_k}^2} - \paren {\sum_{k \mathop = 1}^2 a_k b_k}^2\)

\(=\)







\(\ds \sum_{i \mathop = 1}^1 \sum_{j \mathop = i + 1}^2 \paren {a_i b_j - a_j b_i}^2\)














\(\ds \leadsto \ \ \)





\(\ds \paren { {a_1}^2 + {a_2}^2} \paren { {b_1}^2 + {b_2}^2} - \paren {a_1 b_1 + a_2 b_2}^2\)

\(=\)







\(\ds \paren {a_1 b_2 - a_2 b_1}^2\)





expanding out summations








\(\ds \leadsto \ \ \)





\(\ds \paren {a^2 + b^2} \paren {c^2 + d^2} - \paren {a c + b d}^2\)

\(=\)







\(\ds \paren {a d - b c}^2\)





renaming $a_1 \to a, a_2 \to b, b_1 \to c, b_2 \to d$








\(\ds \leadsto \ \ \)





\(\ds \paren {a^2 + b^2} \paren {c^2 + d^2}\)

\(=\)







\(\ds \paren {a c + b d}^2 + \paren {a d - b c}^2\)









$\blacksquare$


Proof 4
Let $z_1 = a - b i, z_2 = c + d i$ be complex numbers.
Let $\cmod z$ denote the complex modulus of a given complex number $z \in \C$.

By definition of complex multiplication:

$(1): \quad z_1 z_2 = \paren {a c + b d} + \paren {a d - b c} i$

Then:














\(\ds \cmod {z_1 z_2}\)

\(=\)







\(\ds \cmod {z_1} \cmod{z_2}\)





Complex Modulus of Product of Complex Numbers








\(\ds \leadsto \ \ \)





\(\ds \cmod {\paren {a - b i} \paren {c + d i} }^2\)

\(=\)







\(\ds \cmod {a - b i}^2 \cmod {c + d i}^2\)





$z_1 = a - b i, z_2 = c + d i$








\(\ds \leadsto \ \ \)





\(\ds \paren {a c + b d}^2 + \paren {a d - b c}^2\)

\(=\)







\(\ds \paren {a^2 + b^2} \paren {c^2 + d^2}\)





Definition of Complex Modulus, and from $(1)$



$\blacksquare$


Also see
Lagrange's Identity, of which this the case where $n = 2$.


Source of Name
This entry was named for Brahmagupta‎ and Leonardo Fibonacci‎.


Also known as
This identity is also known as Diophantus's Identity, for Diophantus of Alexandria.
Some sources also give it as as Fibonacci's Identity.


Historical Note
Both Brahmagupta‎ and Leonardo Fibonacci‎ described what is now known as the Brahmagupta-Fibonacci Identity in their writings:

628: Brahmagupta: Brahmasphutasiddhanta (The Opening of the Universe)
1225: Fibonacci: Liber quadratorum (The Book of Squares)

However, it appeared earlier than either of those in Diophantus of Alexandria's Arithmetica of the third century C.E.


Sources
1986: David Wells: Curious and Interesting Numbers ... (previous) ... (next): $13$
1997: David Wells: Curious and Interesting Numbers (2nd ed.) ... (previous) ... (next): $13$




