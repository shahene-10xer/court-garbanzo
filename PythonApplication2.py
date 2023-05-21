
import pprint
import google.generativeai as palm

palm.configure(api_key='AIzaSyBN7pgmHofL2n-oGmVHMmzbfAhoUVeJQ9I')

models = [m for m in palm.list_models() if 'generateText' in m.supported_generation_methods]
model = models[0].name
print(model)


prompt = """Summarize this text.
Text:COMPLAINT
COMES NOW the Plaintiff, Jane Doe, by and through her attorneys, FORAN & FORAN, P.A., and sues the Defendant, John Smith, and for reasons therefore states as follows:
The Plaintiff, Jane Doe, is an adult resident of Prince Georges County, Maryland.
That it is believed and therefore alleged that the Defendant, John Smith, is an adult resident of Prince Georges County, Maryland.
That on or about January 2, 2008, at approximately 8:00 a.m., the Plaintiff, Jane Doe, was operating her vehicle, a 2000 Nissan Maxima, on Ivy Lane in Prince Georges County, Maryland attempting to make a left turn.
That on or about January 2, 2008, at approximately 8:00 a.m., the Defendant, John Smith, was operating a vehicle, a 2004 Nissan Pathfinder, directly behind the plaintiff traveling on Ivy Lane in Prince Georges County, Maryland.
That the Defendant, John Smith, negligently operated, maintained and controlled said automobile by failing to come to a stop behind the plaintiff so as to cause his vehicle to collide into the back of the vehicle being operated by the Plaintiff, Jane Doe.
That on the occasion in question the Defendant, John Smith, was negligent in the following particulars, among others, to-wit:
Failure to keep vehicle under control;
Failure to give full time and attention;
Failure to keep a proper lookout;
Failure to reduce speed to avoid collision;
Unreasonable operation of a vehicle under conditions existing;
Failure to obey traffic control devices;
Negligent driving;
Reckless driving;
Failure to yield right of way.
That the collision hereinabove stated was due to the sole negligence of the Defendant, John Smith, without any contributory negligence whatsoever by the Plaintiff, Jane Doe.
COUNT I
(Negligence)
The Plaintiff, Jane Doe, adopts and incorporates all of the facts and allegations set forth above as if fully set forth herein.
That as a direct and proximate result of the aforesaid collision, which was caused by the negligence of the Defendant, John Smith, the Plaintiff, Jane Doe, who was operating the vehicle at the time of the aforesaid collision, was suddenly thrown against the inside of the automobile, thereby causing the Plaintiff, Jane Doe, to suffer severe pain and permanent injury, including but not limited to, her head, neck, both arms, shoulders, right foot, knee, low back, thighs, and buttocks, all of which have caused her great pain and mental anguish.
That as a further direct and proximate result of the negligence of the Defendant, John Smith, the Plaintiff, Jane Doe, has been forced to expend large sums of money for hospitalization, x-rays, nurses, medical treatment and for medicine for the treatment of the aforesaid injuries to herself.
That WHEREFOREas a further direct and proximate result of the negligence of the Defendant, John Smith, the Plaintiff, Jane Doe, was forced to lose time from her employment and has suffered a loss of wages for which she seeks remuneration.
, the Plaintiff, Jane Doe, demands judgment against the Defendant, John Smith, in the amount of Three Hundred Thousand Dollars ($300,000.00) for damages, together with the costs of this action and such other relief as is deemed just and proper.
"""

prompt.encode("utf-8")

completion = palm.generate_text(
    model=model,
    prompt=prompt,
    temperature=0,
    # The maximum length of the response
    max_output_tokens=800,
)

print(completion.result)
