# 

Source: https://proofwiki.org/wiki/Cauchy%27s_Lemma_(Number_Theory)



Theorem
Let $a$ and $b$ be odd positive integers. 
Suppose $a$ and $b$ satisfy: 




\(\text {(1)}: \quad\)









\(\ds b^2\)

\(<\)







\(\ds 4 a\)










\(\text {(2)}: \quad\)









\(\ds 3 a\)

\(<\)







\(\ds b^2 + 2 b + 4\)









Then there exist non-negative integers $s, t, u, v$ such that:














\(\ds a\)

\(=\)







\(\ds s^2 + t^2 + u^2 + v^2\)




















\(\ds b\)

\(=\)







\(\ds s + t + u + v\)











Proof
Because $a$ is odd, we can write:

$a = 2 k + 1$
for some positive integer $k$.
Then:














\(\ds 4 a - b^2\)

\(=\)







\(\ds 4 \paren {2 k + 1} - b^2\)




















\(\ds \)

\(\equiv\)







\(\ds 8 k + 4 - 1\)

\(\ds \pmod 8\)



Odd Square Modulo 8














\(\ds \)

\(\equiv\)







\(\ds 3\)

\(\ds \pmod 8\)







From $(1)$, we have that $4 a - b^2$ is a positive integer. 
By Integer as Sum of Three Odd Squares, there exist $3$ odd positive integers $x, y, z$ such that:

$(3): \quad 4 a - b^2 = x^2 + y^2 + z^2$

Because $b, x, y, z$ are all odd integers, $b + x + y + z$ must be even.

It is now to be shown that $b + x + y \pm z$ is divisible by $4$.
Suppose that $b + x + y + z$ is not divisible by $4$.
Because $b + x + y + z$ is even:

$b + x + y + z \equiv 2 \pmod 4$
Writing $z = 2 l + 1$:














\(\ds b + x + y - z\)

\(=\)







\(\ds b + x + y + z - 2 z\)




















\(\ds \)

\(\equiv\)







\(\ds 2 - 2 \paren {2 l + 1}\)

\(\ds \pmod 4\)


















\(\ds \)

\(\equiv\)







\(\ds 2 - 4 l - 2\)

\(\ds \pmod 4\)


















\(\ds \)

\(\equiv\)







\(\ds 0\)

\(\ds \pmod 4\)







That is:

if $b + x + y + z$ is not divisible by $4$
then $b + x + y - z$ is divisible by $4$.
$\Box$

Let us choose the case such that $b + x + y \pm z$ is divisible by $4$.
We define:














\(\ds s\)

\(=\)

\(\, \ds \frac {b + x + y \pm z} 4 \, \)





\(\ds \)




















\(\ds t\)

\(=\)

\(\, \ds \frac {b + x - y \mp z} 4 \, \)

\(\, \ds = \, \)



\(\ds \frac {b + x} 2 - s\)




















\(\ds u\)

\(=\)

\(\, \ds \frac {b - x + y \mp z} 4 \, \)

\(\, \ds = \, \)



\(\ds \frac {b + y} 2 - s\)




















\(\ds v\)

\(=\)

\(\, \ds \frac {b - x - y \pm z} 4 \, \)

\(\, \ds = \, \)



\(\ds \frac {b \pm z} 2 - s\)









We are to show that $s, t, u, v$ are non-negative, and will satisfy:




\(\text {(1)}: \quad\)









\(\ds a\)

\(=\)







\(\ds s^2 + t^2 + u^2 + v^2\)










\(\text {(2)}: \quad\)









\(\ds b\)

\(=\)







\(\ds s + t + u + v\)










First we show that $s, t, u, v$ are non-negative.
Because $x, y, z$ are positive:

$s, t, u, v \ge \dfrac {b - x - y - z} 4$
So we need to show:

$\dfrac {b - x - y - z} 4 \ge 0$
or equivalently:

$\dfrac {b - x - y - z} 4 > -1$

Now:














\(\ds x + y + z\)

\(\le\)







\(\ds \sqrt {\paren {1^2 + 1^2 + 1^2} \paren {x^2 + y^2 + z^2} }\)





Cauchy's Inequality














\(\ds \)

\(=\)







\(\ds \sqrt {3 \paren {4 a - b^2} }\)





from $(3)$














\(\ds \)

\(<\)







\(\ds \sqrt {4 \paren {b^2 + 2 b + 4} - 3 b^2}\)





from $(2)$














\(\ds \)

\(=\)







\(\ds \sqrt {b^2 + 8 b + 16}\)




















\(\ds \)

\(=\)







\(\ds b + 4\)





Square of Sum








\(\ds \leadsto \ \ \)





\(\ds \frac {b - x - y - z} 4\)

\(>\)







\(\ds -1\)









showing that $s, t, u, v$ are non-negative.

Now we check $(1)$:














\(\ds s^2 + t^2 + u^2 + v^2\)

\(=\)







\(\ds \paren {\frac {b + x + y \pm z} 4}^2 + \paren {\frac {b + x - y \mp z} 4}^2 + \paren {\frac {b - x + y \mp z} 4}^2 + \paren {\frac {b - x - y \pm z} 4}^2\)




















\(\ds \)

\(=\)







\(\ds \frac 1 {16} \leftparen {b^2 + x^2 + y^2 + z^2 + 2 b x + 2 b y \pm 2 b z + 2 x y \pm 2 x z \pm 2 y z}\)




















\(\ds \)

\(\)







\(\ds + \quad b^2 + x^2 + y^2 + z^2 + 2 b x - 2 b y \mp 2 b z - 2 x y \mp 2 x z \pm 2 y z\)




















\(\ds \)

\(\)







\(\ds + \quad b^2 + x^2 + y^2 + z^2 - 2 b x + 2 b y \mp 2 b z - 2 x y \pm 2 x z \mp 2 y z\)




















\(\ds \)

\(\)







\(\ds + \quad \rightparen {b^2 + x^2 + y^2 + z^2 - 2 b x - 2 b y \pm 2 b z + 2 x y \mp 2 x z \mp 2 y z}\)




















\(\ds \)

\(=\)







\(\ds \frac 1 {16} \paren {4 \paren {b^2 + x^2 + y^2 + z^2} }\)




















\(\ds \)

\(=\)







\(\ds \frac {4 a} 4\)




















\(\ds \)

\(=\)







\(\ds a\)










Now we check $(2)$:














\(\ds s + t + u + v\)

\(=\)







\(\ds \frac {b + x + y \pm z} 4 + \frac {b + x - y \mp z} 4 + \frac {b - x + y \mp z} 4 + \frac {b - x - y \pm z} 4\)




















\(\ds \)

\(=\)







\(\ds \frac {4 b} 4 + \frac {2 x - 2 x} 4 + \frac {2 y - 2 y} 4 \pm \frac {2 z - 2 z} 4\)




















\(\ds \)

\(=\)







\(\ds b\)









Therefore $s, t, u, v$ as defined are the integers we are looking for.
$\blacksquare$


Source of Name
This entry was named for Augustin Louis Cauchy.


Sources
Jan 1987: Melvyn B. Nathanson: A Short Proof of Cauchy's Polygonal Number Theorem (Proceedings of the American Mathematical Society Vol. 99, no. 1: pp. 22 – 24)




