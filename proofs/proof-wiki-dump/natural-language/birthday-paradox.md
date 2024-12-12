# 

Source: https://proofwiki.org/wiki/Birthday_Paradox



Paradox
Let there be $23$ or more people in a room.
The probability that at least $2$ of them have the same birthday is greater than $50 \%$.


Proof
Let there be $n$ people in the room.
Let $\map p n$ be the probability that no two people in the room have the same birthday.
For simplicity, let us ignore leap years and assume there are $365$ days in the year.

Let the birthday of person $1$ be established.
The probability that person $2$ shares person $1$'s birthday is $\dfrac 1 {365}$.
Thus, the probability that person $2$ does not share person $1$'s birthday is $\dfrac {364} {365}$.
Similarly, the probability that person $3$ does not share the birthday of either person $1$ or person $2$ is $\dfrac {363} {365}$.
And further, the probability that person $n$ does not share the birthday of any of the people indexed $1$ to $n - 1$ is $\dfrac {365 - \paren {n - 1} } {365}$.
Hence the total probability that none of the $n$ people share a birthday is given by:














\(\ds \map p n\)

\(=\)







\(\ds \dfrac {365} {365} \dfrac {364} {365} \dfrac {363} {365} \dfrac {362} {365} \cdots \dfrac {365 - n + 1} {365}\)




















\(\ds \)

\(=\)







\(\ds \dfrac 1 {365^n} \dfrac {365!} {\paren {365 - n}! }\)





Falling Factorial as Quotient of Factorials














\(\ds \)

\(=\)







\(\ds \dfrac 1 {365^n} \dfrac {n!} {n!} \dfrac {365!} {\paren {365 - n}! }\)





multiply by 1














\(\ds \)

\(=\)







\(\ds \dfrac {n!} {365^n} \binom {365} n\)





Definition of Binomial Coefficient



Setting $n = 23$ and evaluating the above gives:

$\map p {23} \approx 0.493$
Hence the probability that at least $2$ people share a birthday is $1.000 - 0.493 = 0.507 = 50.7 \%$
$\blacksquare$


Conclusion
This is a veridical paradox.
Counter-intuitively, the probability of a shared birthday amongst such a small group of people is surprisingly high.


General Birthday Paradox
$3$ People Sharing a Birthday
Let $n$ be a set of people.
Let the probability that at least $3$ of them have the same birthday be greater than $50 \%$.

Then $n \ge 88$.


Sources
1986: David Wells: Curious and Interesting Numbers ... (previous) ... (next): $23$
1997: David Wells: Curious and Interesting Numbers (2nd ed.) ... (previous) ... (next): $23$




