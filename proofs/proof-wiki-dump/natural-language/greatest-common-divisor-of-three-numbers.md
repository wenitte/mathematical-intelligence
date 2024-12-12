# 

Source: https://proofwiki.org/wiki/Greatest_Common_Divisor_of_Three_Numbers



Theorem
In the words of Euclid:

Given three numbers not prime to one another, to find their greatest common measure.
(The Elements: Book $\text{VII}$: Proposition $3$)


Proof
Let $A, B, C$ be the three given (natural) numbers not prime to one another.


Let the GCD $D$ of $A, B$ be found, by the Euclidean Algorithm.
Then $D$ either divides or does not divide $C$.

First, suppose $D$ divides $C$.
Then as it also divides $A$ and $B$, it is a common divisor of $A, B$ and $C$.
Suppose $D$ is not the GCD of $A, B, C$.
Then some number $E$ is a common divisor of $A, B$ and $C$ such that $E > D$.
But then $E$ is a common divisor of $A$ and $B$ and so from the porism to Euclid's Algorithm $E$ also divides $D$.
That means $E \le D$ which contradicts $E > D$.
So $D$ is the GCD of $A, B, C$ after all.

Next, suppose $D$ is not a divisor of $C$.
Since $A, B, C$ are not prime to one another, some number will divide them.
That number which divides $A, B, C$ will also divide $A, B$ and so from the porism to Euclid's Algorithm will also divide $D$.
But it also divides $C$.
So some number divides both $D$ and $C$, and so $C$ and $D$ are not prime to one another.
Let the GCD of $C$ and $D$ be $E$, by the Euclidean Algorithm.
Since $E$ divides $D$ and $D$ divides $A, B$, then $E$ divides $A, B$.
But $E$ divides $C$, and so $E$ divides $A, B, C$.
So $E$ is a common divisor of $A, B$ and $C$.

Now suppose $E$ is not the GCD of $A, B, C$.
Then some number $F$ such that $F > E$ divides $A, B, C$.
It follows that $F$ divides $A$ and $B$, and so from the porism to Euclid's Algorithm will also divide $D$, the GCD of $A, B$.
So $F$ divides $D$ and $F$ also divides $C$.
So $F$ is a common divisor of $D$ and $C$.
So by the porism to Euclid's Algorithm, $F$ divides the GCD of $C, D$, which is $E$.
But this contradicts the supposition that $F > E$.
So no such $F$ can exist, and so $E$ is the GCD of $A, B, C$.
$\blacksquare$


Historical Note
This proof is Proposition $3$ of Book $\text{VII}$ of Euclid's The Elements.


Sources
1926: Sir Thomas L. Heath: Euclid: The Thirteen Books of The Elements: Volume 2 (2nd ed.) ... (previous) ... (next): Book $\text{VII}$. Propositions




