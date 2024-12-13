# 

Source: https://proofwiki.org/wiki/Pythagorean_Triangle_from_Fibonacci_Numbers

Theorem
Take $4$ consecutive Fibonacci numbers:

$F_n, F_{n + 1}, F_{n + 2}, F_{n + 3}$
Let:

$a := F_n F_{n + 3}$
$b := 2 F_{n + 1} F_{n + 2}$
$c := F_{2 n + 3}$

Then:

$a^2 + b^2 = c^2$
and:

$\dfrac {a b} 2 = F_n \times F_{n + 1} \times F_{n + 2} \times F_{n + 3}$

That is, if the legs of a right triangle are the product of the outer terms and twice the inner terms, then:

the hypotenuse is the Fibonacci number whose index is half the sum of the indices of the four given Fibonacci numbers.
the area is the product of the four given Fibonacci numbers.


Proof
By definition of Fibonacci numbers:

$F_n = F_{n + 2} - F_{n + 1}$
and:

$F_{n + 3} = F_{n + 2} + F_{n + 1}$

Then $a$ can be expressed as:














\(\ds a\)

\(=\)







\(\ds \paren {F_{n + 2} - F_{n + 1} } \paren {F_{n + 2} + F_{n + 1} }\)




















\(\ds \)

\(=\)







\(\ds {F_{n + 2} }^2 - {F_{n + 1} }^2\)










Now consider:














\(\ds \)

\(\)







\(\ds F_{n + 2} F_{n + 3} - F_n F_{n + 1}\)




















\(\ds \)

\(=\)







\(\ds F_{n + 2} \paren {F_{n + 2} + F_{n + 1} } - \paren {F_{n + 2} - F_{n + 1} } F_{n + 1}\)




















\(\ds \)

\(=\)







\(\ds {F_{n + 2} }^2 + {F_{n + 1} }^2\)





multiplying out



and it can be seen that the ordered triple:

$\paren {{F_{n + 2} }^2 - {F_{n + 1} }^2, 2 F_{n + 1} F_{n + 2}, {F_{n + 2} }^2 + {F_{n + 1} }^2}$
is in the form of Solutions of Pythagorean Equation.

It remains to be shown that:

${F_{n + 2} }^2 + {F_{n + 1} }^2 = F_{2 n + 3}$
We have:














\(\ds F_{2 n + 3}\)

\(=\)







\(\ds F_{\paren {n + 1} + \paren {n + 2} }\)




















\(\ds \)

\(=\)







\(\ds F_{\paren {n + 2} } F_{\paren {n + 1} + 1} + F_{\paren {n + 2} - 1} F_{\paren {n + 1} }\)





Honsberger's Identity














\(\ds \)

\(=\)







\(\ds {F_{n + 2} }^2 + {F_{n + 1} }^2\)









and the proof is complete.
$\Box$

The area is trivial:














\(\ds a\)

\(=\)







\(\ds F_n F_{n + 3}\)




















\(\ds b\)

\(=\)







\(\ds 2 F_{n + 1} F_{n + 2}\)














\(\ds \leadsto \ \ \)





\(\ds \frac {a b} 2\)

\(=\)







\(\ds \frac {F_n F_{n + 3} \times 2 F_{n + 1} F_{n + 2} } 2\)




















\(\ds \)

\(=\)







\(\ds F_n \times F_{n + 1} \times F_{n + 2} \times F_{n + 3}\)









$\blacksquare$


Sources
1948: Charles W. Raine: Pythagorean Triangles from the Fibonacci Series 1, 1, 2, 3, 5, 8, (Scripta Math. Vol. 14: p. 164)
1986: David Wells: Curious and Interesting Numbers ... (previous) ... (next): $5$
1997: David Wells: Curious and Interesting Numbers (2nd ed.) ... (previous) ... (next): $5$




