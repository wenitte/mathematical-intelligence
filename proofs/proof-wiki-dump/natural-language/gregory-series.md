# 

Source: https://proofwiki.org/wiki/Gregory_Series



Theorem
For $-\dfrac \pi 4 \le \theta \le \dfrac \pi 4$:

$\theta = \tan \theta - \dfrac 1 3 \tan^3 \theta + \dfrac 1 5 \tan^5 \theta - \ldots$
This is called the Gregory Series.


Proof













\(\ds 1\)

\(=\)







\(\ds \frac {\sec^2 \theta} {\sec^2 \theta}\)




















\(\ds \)

\(=\)







\(\ds \sec^2 \theta \times \frac 1 {1 - \paren {-\tan^2 \theta} }\)




















\(\ds \)

\(=\)







\(\ds \sec^2 \theta \times \sum_{n \mathop = 0}^\infty \paren {-\tan^2 \theta}^n\)





Sum of Infinite Geometric Sequence














\(\ds \)

\(=\)







\(\ds \sum_{n \mathop = 0}^\infty \paren {-1}^n \sec^2 \theta \tan^{2 n} \theta\)










By the root test the radius of convergence is $-\dfrac \pi 4 \le \theta \le \dfrac \pi 4$.















\(\ds \int \paren {1} \rd \theta\)

\(=\)







\(\ds \int \paren {\sum_{n \mathop = 0} ^ \infty \paren {-1} ^ n \sec ^ 2 \theta \tan ^ {2 n} \theta} \rd \theta\)





Integrating both sides














\(\ds \int \rd \theta\)

\(=\)







\(\ds \sum_{n \mathop = 0}^\infty \paren {-1} ^ n \int  \paren { \sec ^ 2 \theta \tan ^ {2 n} \theta} \rd \theta\)




















\(\ds \theta\)

\(=\)







\(\ds \sum_{n \mathop = 0} ^ \infty \frac {\paren {-1} ^ n}{2 n + 1} \tan ^ {2 n + 1} \theta\)





Primitive of Power of Tangent of a x by Square of Secant of a x



$\blacksquare$


Also presented as
The Gregory Series can also be seen in the form:

$\tan^{-1} \theta = \theta - \dfrac {\theta^3} 3 + \dfrac {\theta^5} 5 - \ldots$
which is valid for $-1 \le x \le 1$.


Also known as
The Gregory series is also known as Gregory's series.
It can also be seen referred to as the inverse tangent series when expressed in the inverse tangent form.


Also see
Leibniz's Formula for Pi


Source of Name
This entry was named for James Gregory.


Historical Note
James Gregory established the result now known as the Gregory Series at least as early as $1671$.
Some sources suggest $1667$.


Sources
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): Gregory's series (J. Gregory, 1667)
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): Gregory's series (J. Gregory, 1667)




