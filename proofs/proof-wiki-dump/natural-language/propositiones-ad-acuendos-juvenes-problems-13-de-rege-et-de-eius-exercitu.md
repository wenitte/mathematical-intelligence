# 

Source: https://proofwiki.org/wiki/Propositiones_ad_Acuendos_Juvenes/Problems/13_-_De_Rege_et_de_Eius_Exercitu



Propositiones ad Acuendos Juvenes by Alcuin of York: Problem $13$
De Rege et de Eius Exercitu
A King's Army
A king ordered his servant to collect an army from $30$ manors,
in such a way that from each manor he would take the same number of men as he had collected up till then.
The servant went to the first manor alone;
to the second he went with one other;
to the next he took $3$ with him.
How many were collected in all?


Solution
$2^{30} = 1 \, 073 \, 741 \, 824$
An extraordinarily large army.


Proof
The assumption is that on visiting the first manor, the servant has collected himself, so to speak.
Otherwise the question never gets started::

the servant collects no soldiers from the first manor,
the same number as collected so far (none) from the second, and so on,
until at the $30$th manor he still has collected no soldiers.

So the assumption as made is that on visiting the $1$st manor, the servant has collected $2^0 = 1$ soldier, namely, himself.
After visiting the first manor, the servant has $2^1 = 2$ soldiers.

Let $T_n$ denote the number of soldiers collected after visiting manor $n$.
On visiting manor $n + 1$, the servant has collected $T_n$ soldiers.
Thus on leaving manor $n + 1$, the servant has collected $T_n + T_n$, that is, $2 T_n$ soldiers.
It follows by Principle of Mathematical Induction that after visiting the $n$th manor, he has a total of $2^n$ soldiers.
The result follows.
$\blacksquare$


Historical Note
This is seen to be an example of the Wheat and Chessboard Problem, taken to not quite as great an extreme.
John Hadley and David Singmaster, in their translation of Propositiones ad Acuendos Juvenes, give Alcuin's complete solution, which consists of documenting each of the powers of $2$  in turn:

After the first stop there were $2$ men; after the second $4$; after the third $8$; after the fourth $16$; ... after the twenty-ninth $536870912$; after the thirtieth $1073741824$.
Singmaster goes on to note that in some of the historical manuscripts that propagate this problem, a number of them have incorrect values.


Sources
c. 800: Alcuin of York: Propositiones ad Acuendos Juvenes ... (previous) ... (next)
1992: John Hadley/2 and David Singmaster: Problems to Sharpen the Young (Math. Gazette Vol. 76, no. 475: pp. 102 – 126)  www.jstor.org/stable/3620384
1992: David Wells: Curious and Interesting Puzzles ... (previous) ... (next): 'Propositions to Sharpen Up the Young': $78$




